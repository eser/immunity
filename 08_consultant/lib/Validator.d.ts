import { ConsultationResult, ConsultationError } from './Consultation';
import { Rule, RuleCollection } from './Rule';
export declare class Validator {
    static getArgvKeys(rule: Rule, key: string, condition: (key: string) => boolean): string[];
    static prepareValue(value: any[], childKey: string, child: Rule): {
        value: any;
        errors: ConsultationError[] | undefined;
    };
    processSingleParameter(childKey: string, child: Rule, argv: object): {
        values: any;
        errors: ConsultationError[] | undefined;
        argvRemainder: object;
    };
    processParameters(children: RuleCollection, argv: object): {
        values: {};
        errors: {};
        argvRemainder: object;
    };
    processSingleCommand(childKey: string, child: Rule, argv: object): {
        commandKey: string;
        argvRemainder: object;
    } | {
        commandKey: undefined;
        argvRemainder: object;
    };
    processCommands(children: RuleCollection, argv: object): {
        commandKey: string | undefined;
        argvRemainder: object;
    };
    validateSingle(rule: Rule, argv: object): any;
    validate(rules: Rule, argv: object): Promise<ConsultationResult>;
}
export default Validator;
