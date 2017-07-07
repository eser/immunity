import { EventEmitter } from 'es6-eventemitter/lib/EventEmitter';
export declare type SeverityType = {
    color: string;
    label: string;
};
export declare type FormatterType = {
    format(severity: SeverityType, message: string): string;
};
export declare type LoggerType = {
    log(severity: SeverityType, message: string, extraData?: any): void | Promise<void>;
    direct(message: string): void | Promise<void>;
};
export declare type LoggerTypeConstructorType = {
    new (formatter: FormatterType, ...args: Array<any>): LoggerType;
};
export declare const defaultSeverities: {
    debug: {
        color: string;
        label: string;
    };
    info: {
        color: string;
        label: string;
    };
    warn: {
        color: string;
        label: string;
    };
    error: {
        color: string;
        label: string;
    };
};
export declare class LogManager {
    events: EventEmitter;
    loggerTypes: {
        [key: string]: LoggerTypeConstructorType;
    };
    formatters: {
        [key: string]: FormatterType;
    };
    severities: {
        [key: string]: SeverityType;
    };
    severityIndexes: {
        [key: string]: number;
    };
    loggers: {
        [key: string]: LoggerType;
    };
    level: string;
    constructor(events: EventEmitter);
    addLogger(name: string, loggerTypeName: string, formatterTypeName: string, ...args: any[]): void;
    removeLogger(name: string): void;
    setSeverities(severities: {
        [key: string]: SeverityType;
    }): void;
    linkLogMethods(target: any): void;
    unlinkLogMethods(target: any): void;
    log(severity: string, message: string, extraData?: any): void;
    logAsync(severity: string, message: string, extraData?: any): Promise<void>;
    write(message: string): void;
    writeAsync(message: string): Promise<void>;
}
export default LogManager;
