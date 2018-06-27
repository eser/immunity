import { ConsultationResult, ConsultationError } from './Consultation';
import Rule, { RuleCollection, ValidateMethod } from './Rule';
declare type ValidationOutputType = {
    commandId?: string;
    values: {
        [key: string]: any;
    };
    errors: {
        [key: string]: Array<ConsultationError>;
    };
    argvRemainder: {
        [key: string]: any;
    };
};
declare class Validator {
    static getArgvKeys(rule: Rule, key: string, condition: (key: string) => boolean): Array<string>;
    static executeValidatorSingle(validatorFunc: ValidateMethod, childKey: any, value: any): Promise<Array<ConsultationError>>;
    static executeValidator(validatorFunc: ValidateMethod, childKey: any, value: any): Promise<Array<ConsultationError>>;
    static prepareValue(value: any[], childKey: string, child: Rule): Promise<{
        value: any;
        errors?: Array<ConsultationError>;
    }>;
    processSingleParameter(childKey: string, child: Rule, argv: {
        [key: string]: any;
    }): Promise<{
        values: {
            [key: string]: any;
        };
        errors?: Array<ConsultationError>;
        argvRemainder: {
            [key: string]: any;
        };
    }>;
    processParameters(children: RuleCollection, argv: {
        [key: string]: any;
    }): Promise<{
        values: {
            [key: string]: any;
        };
        errors?: {
            [key: string]: Array<ConsultationError>;
        };
        argvRemainder: {
            [key: string]: any;
        };
    }>;
    processSingleCommand(childKey: string, child: Rule, argv: {
        [key: string]: any;
    }): {
        commandKey?: string;
        argvRemainder: {
            [key: string]: any;
        };
    };
    processCommands(children: RuleCollection, argv: {
        [key: string]: any;
    }): {
        commandKey?: string;
        argvRemainder: {
            [key: string]: any;
        };
    };
    validateSingle(rule: Rule, argv: {
        [key: string]: any;
    }): Promise<ValidationOutputType>;
    validate(rules: Rule, argv: {
        [key: string]: any;
    }): Promise<ConsultationResult>;
}
export { ValidationOutputType, Validator as default, };
