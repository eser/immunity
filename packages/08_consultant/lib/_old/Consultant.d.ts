import { ConsultationResult } from './Consultation';
import Rule from './Rule';
declare class Consultant {
    static types: any;
    rules: Rule;
    constructor(rules: Rule);
    fromObject(argv: object): Promise<ConsultationResult>;
    fromString(args: string): Promise<ConsultationResult>;
    fromCommandLine(): Promise<ConsultationResult>;
    fromInquiry(): Promise<ConsultationResult>;
    static getRuleInternal(predicate: (key: string, rule: Rule) => boolean, node: Rule): Promise<Rule | undefined>;
    getRule(predicate: (key: string, rule: Rule) => boolean): Promise<Rule | undefined>;
    getRuleById(id: string): Promise<Rule | undefined>;
    help(): Promise<void>;
    helpForId(id: string): Promise<void>;
}
export { Consultant as default, };
