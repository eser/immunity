"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const immunity = require("immunity");
const assign_1 = require("ponyfills/lib/assign");
const Rule_1 = require("./Rule");
const Types_1 = require("./Types");
class Validator {
    static getArgvKeys(rule, key, condition) {
        let keys = [];
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
    static async executeValidatorSingle(validatorFunc, childKey, value) {
        const validationMethodResult = await validatorFunc(value);
        if (validationMethodResult !== true) {
            return [
                { error: `validation failed for ${childKey}. value is "${value}": ${validationMethodResult}` }
            ];
        }
        return [];
    }
    static async executeValidator(validatorFunc, childKey, value) {
        if (!Array.isArray(value)) {
            return await this.executeValidatorSingle(validatorFunc, childKey, value);
        }
        let errors = [];
        for (const currentValue of value) {
            errors = immunity.mergeArrays(errors, await this.executeValidatorSingle(validatorFunc, childKey, currentValue));
        }
        return errors;
    }
    static async prepareValue(value, childKey, child) {
        let errors = [], newValue = value;
        const length = value.length;
        if (child.type === Types_1.default.booleanParameter) {
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
            errors = immunity.mergeArrays(errors, await this.executeValidator(child.validate, childKey, newValue));
        }
        return {
            value: newValue,
            errors: (errors.length > 0) ? errors : undefined
        };
    }
    async processSingleParameter(childKey, child, argv) {
        let argvRemainder = argv, errors, values;
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
    async processParameters(children, argv) {
        let argvRemainder = argv, values = {}, errors = {};
        for (const childKey in children) {
            const child = children[childKey];
            if (child.type === Types_1.default.command) {
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
    processSingleCommand(childKey, child, argv) {
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
    processCommands(children, argv) {
        let argvRemainder = argv, commandKey;
        if (argvRemainder._ !== undefined) {
            for (const childKey in children) {
                const child = children[childKey];
                if (child.type !== Types_1.default.command) {
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
                argvRemainder = assign_1.default({}, argvRemainder, { _: argvRemainder._.slice(1) });
            }
        }
        return {
            commandKey: commandKey,
            argvRemainder: argvRemainder
        };
    }
    async validateSingle(rule, argv) {
        let commandId;
        const children = await Rule_1.getRuleChildren(rule);
        let argvRemainder = argv, values = {}, errors = {};
        if (children !== undefined) {
            const result1 = await this.processParameters(children, argvRemainder);
            values = immunity.mergeObjects(values, result1.values);
            errors = immunity.mergeObjects(errors, result1.errors);
            argvRemainder = result1.argvRemainder;
            const result2 = this.processCommands(children, argvRemainder);
            if (result2.commandKey !== undefined) {
                const command = children[result2.commandKey];
                commandId = command.id;
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
    async validate(rules, argv) {
        const result = await this.validateSingle(rules, argv);
        return {
            commandId: result.commandId,
            values: result.values,
            errors: result.errors,
            isValid: Object.keys(result.errors).length === 0,
            isCancelled: false
        };
    }
}
exports.default = Validator;
//# sourceMappingURL=Validator.js.map