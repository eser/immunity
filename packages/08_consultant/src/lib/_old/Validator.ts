import immunity = require('immunity');
import assign from 'ponyfills/lib/assign';
import { ConsultationResult, ConsultationError } from './Consultation';
import Rule, { RuleCollection, ValidateMethod, getRuleChildren } from './Rule';
import Types from './Types';

type ValidationOutputType = {
    commandId?: string,
    values: { [key: string]: any },
    errors: { [key: string]: Array<ConsultationError> },
    argvRemainder: { [key: string]: any },
}

class Validator {
    static getArgvKeys(rule: Rule, key: string, condition: (key: string) => boolean): Array<string> {
        let keys: string[] = [];

        if (condition(key)) {
            keys = immunity.appendToArray(keys, key);
        }

        if (rule.aliases !== undefined) {
            for (const alias of rule.aliases) {
                if (condition(alias)) {
                    keys = immunity.appendToArray(keys, alias);
                }
            }
        }

        return keys;
    }

    static async executeValidatorSingle(validatorFunc: ValidateMethod, childKey, value): Promise<Array<ConsultationError>> {
        const validationMethodResult = await validatorFunc(value);

        if (validationMethodResult !== true) {
            return [
                { error: `validation failed for ${childKey}. value is "${value}": ${validationMethodResult}` }
            ];
        }

        return [];
    }

    static async executeValidator(validatorFunc: ValidateMethod, childKey, value): Promise<Array<ConsultationError>> {
        if (!Array.isArray(value)) {
            return await this.executeValidatorSingle(validatorFunc, childKey, value);
        }

        let errors: ConsultationError[] = [];

        for (const currentValue of value) {
            errors = immunity.mergeArrays(
                errors,
                await this.executeValidatorSingle(validatorFunc, childKey, currentValue)
            );
        }

        return errors;
    }

    static async prepareValue(value: any[], childKey: string, child: Rule): Promise<{ value: any, errors?: Array<ConsultationError> }> {
        let errors: ConsultationError[] = [],
            newValue: any = value;

        const length = value.length;

        if (child.type === Types.booleanParameter) {
            if (length > 1) {
                errors = immunity.appendToArray(errors, { error: `many occurences for ${childKey}` });
            }

            newValue = newValue[0];

            if (newValue !== undefined) {
                if (newValue.constructor !== Boolean) {
                    errors = immunity.appendToArray(errors, { error: `invalid boolean value for ${childKey}: ${newValue}` });
                }
            }
        }
        else {
            if (child.values !== undefined) {
                for (const currentValue of newValue) {
                    if (child.values.indexOf(currentValue) === -1) {
                        errors = immunity.appendToArray(errors, { error: `invalid value for ${childKey}: ${currentValue}` });
                    }
                }
            }

            if (child.max !== undefined) {
                if (length > child.max) {
                    errors = immunity.appendToArray(errors, { error: `maximum length violation for ${childKey}` });
                    // newValue = newValue.slice(0, child.max);
                }

                if (child.max <= 1) {
                    newValue = newValue[0];
                }
            }
        }

        if (child.min > length) {
            errors = immunity.appendToArray(errors, { error: `minimum length violation for ${childKey}` });
        }

        if (child.validate !== undefined) {
            errors = immunity.mergeArrays(
                errors,
                await this.executeValidator(child.validate, childKey, newValue)
            );
        }

        return {
            value: newValue,
            errors: (errors.length > 0) ? errors : undefined
        };
    }

    async processSingleParameter(childKey: string, child: Rule, argv: { [key: string]: any }): Promise<{ values: { [key: string]: any }, errors?: Array<ConsultationError>, argvRemainder: { [key: string]: any } }> {
        let argvRemainder = argv,
            errors: ConsultationError[] | undefined,
            values;

        const argvKeys = Validator.getArgvKeys(child, childKey, (key) => key in argvRemainder);

        if (argvKeys.length > 0) {
            values = [];

            for (const argvKey of argvKeys) {
                if (Array.isArray(argvRemainder[argvKey])) {
                    values = immunity.mergeArrays(values, argvRemainder[argvKey]);
                }
                else {
                    values = immunity.appendToArray(values, argvRemainder[argvKey]);
                }

                argvRemainder = immunity.removeKeyFromObject(argvRemainder, argvKey);
            }

            const valueResult = await Validator.prepareValue(values, childKey, child);
            values = valueResult.value;
            errors = valueResult.errors;
        }
        else if (child.default !== undefined) {
            values = child.default;
        }

        return {
            values: values,
            errors: errors,
            argvRemainder: argvRemainder
        };
    }

    async processParameters(children: RuleCollection, argv: { [key: string]: any }): Promise<{ values: { [key: string]: any }, errors?: { [key: string]: Array<ConsultationError> }, argvRemainder: { [key: string]: any } }> {
        let argvRemainder = argv,
            values = {},
            errors = {};

        for (const childKey in children) {
            const child = children[childKey];

            if (child.type === Types.command) {
                continue;
            }

            const result = await this.processSingleParameter(childKey, child, argvRemainder);

            argvRemainder = result.argvRemainder;

            if (result.values !== undefined) {
                values = immunity.appendToObject(values, { [childKey]: result.values });
            }

            if (result.errors !== undefined) {
                errors = immunity.appendToObject(errors, { [childKey]: result.errors });
            }
        }

        return {
            values: values,
            errors: errors,
            argvRemainder: argvRemainder
        };
    }

    processSingleCommand(childKey: string, child: Rule, argv: { [key: string]: any }): { commandKey?: string, argvRemainder: { [key: string]: any } } {
        let argvRemainder = argv;

        const argvKeys = Validator.getArgvKeys(child, childKey, (key) => argvRemainder._.indexOf(key) >= 0);

        for (const argvKey of argvKeys) {
            if (argvKey === argvRemainder._[0]) {
                return {
                    commandKey: childKey,
                    argvRemainder: argvRemainder
                };
            }
        }

        return {
            commandKey: undefined,
            argvRemainder: argvRemainder
        };
    }

    processCommands(children: RuleCollection, argv: { [key: string]: any }): { commandKey?: string, argvRemainder: { [key: string]: any } } {
        let argvRemainder = argv,
            commandKey: string | undefined;

        if (argvRemainder._ !== undefined) {
            for (const childKey in children) {
                const child = children[childKey];

                if (child.type !== Types.command) {
                    continue;
                }

                const result = this.processSingleCommand(childKey, child, argvRemainder);

                argvRemainder = result.argvRemainder;
                if (result.commandKey !== undefined) {
                    commandKey = result.commandKey;
                    break;
                }
            }

            if (commandKey !== undefined) {
                argvRemainder = assign(
                    {},
                    argvRemainder,
                    { _: argvRemainder._.slice(1) }
                );
            }
        }

        return {
            commandKey: commandKey,
            argvRemainder: argvRemainder
        };
    }

    async validateSingle(rule: Rule, argv: { [key: string]: any }): Promise<ValidationOutputType> {
        let commandId: string | undefined;
        const children = await getRuleChildren(rule);

        let argvRemainder = argv,
            values = {},
            errors = {};

        if (children !== undefined) {
            // parameters first
            const result1 = await this.processParameters(children, argvRemainder);
            values = immunity.mergeObjects(values, result1.values);
            errors = immunity.mergeObjects(errors, result1.errors);
            argvRemainder = result1.argvRemainder;

            // locate command
            const result2 = this.processCommands(children, argvRemainder);
            if (result2.commandKey !== undefined) {
                const command = children[result2.commandKey];

                commandId = command.id;

                // and traverse children, then merge arrays
                const result3 = await this.validateSingle(command, result2.argvRemainder);

                if (result3.commandId !== undefined) {
                    commandId = result3.commandId;
                }

                argvRemainder = result3.argvRemainder;
                values = immunity.appendToObject(values, {
                    [result2.commandKey]: result3.values
                });
            }
        }

        return {
            commandId: commandId,
            values: values,
            errors: errors,
            argvRemainder: argvRemainder
        };
    }

    async validate(rules: Rule, argv: { [key: string]: any }): Promise<ConsultationResult> {
        const result = await this.validateSingle(rules, argv);

        // TODO don't throw any exception if argvRemainder._.length > 0 && lastCommand.strict == false
        // TODO fix me, introduce Types.VariableCommand / Types.Placeholder for: "jsmake plugins <plugin> set <parameter> <value>"
        // console.log(result.argvRemainder);

        // TODO
        return {
            commandId: result.commandId,
            values: result.values,
            errors: result.errors,
            isValid: Object.keys(result.errors).length === 0,
            isCancelled: false
        };
    }
}

export {
    ValidationOutputType,
    Validator as default,
};
