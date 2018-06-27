import Rule from './Rule';
interface ConsultationError {
    error: string;
}
interface ConsultationResult {
    commandId?: string;
    values: object;
    isValid: boolean;
    isCancelled: boolean;
    errors: {
        [key: string]: ConsultationError[];
    };
}
declare class Consultation {
    rules: Rule;
    source?: object;
    constructor(rules: Rule, argv?: object);
    validate(): Promise<ConsultationResult>;
    inquire(): Promise<ConsultationResult>;
}
export { ConsultationError, ConsultationResult, Consultation as default, };
