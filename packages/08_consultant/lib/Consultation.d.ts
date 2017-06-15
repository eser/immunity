import { Rule } from './Rule';
export interface ConsultationError {
    error: string;
}
export interface ConsultationResult {
    commandId?: string;
    values: object;
    isValid: boolean;
    isCancelled: boolean;
    errors: {
        [key: string]: ConsultationError[];
    };
}
export declare class Consultation {
    rules: Rule;
    source?: object;
    constructor(rules: Rule, argv?: object);
    validate(): ConsultationResult;
    inquire(): Promise<ConsultationResult>;
}
export default Consultation;
