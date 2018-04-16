type SeverityType = {
    color: string,
    label: string,
}

type FormatterType = {
    format(severity: SeverityType, message: string): string,
}

type LoggerType = {
    log(severity: SeverityType, message: string, extraData?: any): void | Promise<void>,
    direct(message: string): void | Promise<void>,
}

type LoggerTypeConstructorType = {
    new(formatter: FormatterType, ...args: Array<any>): LoggerType,
}

export {
    SeverityType,
    FormatterType,
    LoggerType,
    LoggerTypeConstructorType,
};
