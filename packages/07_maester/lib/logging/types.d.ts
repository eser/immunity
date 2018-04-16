declare type SeverityType = {
    color: string;
    label: string;
};
declare type FormatterType = {
    format(severity: SeverityType, message: string): string;
};
declare type LoggerType = {
    log(severity: SeverityType, message: string, extraData?: any): void | Promise<void>;
    direct(message: string): void | Promise<void>;
};
declare type LoggerTypeConstructorType = {
    new (formatter: FormatterType, ...args: Array<any>): LoggerType;
};
export { SeverityType, FormatterType, LoggerType, LoggerTypeConstructorType };
