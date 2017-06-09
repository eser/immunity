import { Types } from './Types';
import { ConsultationResult } from './Consultation';
import { Rule } from './Rule';
export declare class Consultant {
    static types: typeof Types;
    rules: Rule;
    constructor(rules: Rule);
    fromObject(argv: object): Promise<ConsultationResult>;
    fromString(args: string): Promise<ConsultationResult>;
    fromCommandLine(): Promise<ConsultationResult>;
    fromInquiry(): Promise<ConsultationResult>;
    getRule(predicate: (key: string, rule: Rule) => boolean, node?: Rule): any;
    getRuleById(id: string): Promise<any>;
    help(): Promise<void>;
    helpForId(id: string): Promise<void>;
}
export default Consultant;
