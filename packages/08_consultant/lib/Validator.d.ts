import { ConsultationResult, ConsultationError } from './Consultation';
import { Rule, RuleCollection } from './Rule';
export declare class Validator {
    static getArgvKeys(rule: Rule, key: string, condition: (key: string) => boolean): string[];
    static prepareValue(value: any[], childKey: string, child: Rule): Promise<{
        value: any;
        errors: ConsultationError[] | undefined;
    }>;
    processSingleParameter(childKey: string, child: Rule, argv: {
        [key: string]: any;
    }): Promise<{
        values: any;
        errors: ConsultationError[] | undefined;
        argvRemainder: {
            [key: string]: any;
        };
    }>;
    processParameters(children: RuleCollection, argv: {
        [key: string]: any;
    }): Promise<{
        values: {};
        errors: {};
        argvRemainder: {
            [key: string]: any;
        };
    }>;
    processSingleCommand(childKey: string, child: Rule, argv: {
        [key: string]: any;
    }): {
        commandKey: string;
        argvRemainder: {
            [key: string]: any;
        };
    } | {
        commandKey: undefined;
        argvRemainder: {
            [key: string]: any;
        };
    };
    processCommands(children: RuleCollection, argv: {
        [key: string]: any;
    }): {
        commandKey: string | undefined;
        argvRemainder: {
            [key: string]: any;
        };
    };
    validateSingle(rule: Rule, argv: {
        [key: string]: any;
    }): any;
    validate(rules: Rule, argv: {
        [key: string]: any;
    }): Promise<ConsultationResult>;
}
export default Validator;
