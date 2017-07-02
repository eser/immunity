import { EventEmitter } from 'es6-eventemitter/lib/esm';
export declare type SeverityType = {
    color: string;
    label: string;
};
export declare type FormatterType = {
    format(severity: SeverityType, message: string): string;
};
export declare type LoggerType = {
    log(severity: SeverityType, formatter: FormatterType, message: string): void | Promise<void>;
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
    colors: any;
    loggerTypes: {
        [key: string]: any;
    };
    formatters: {
        [key: string]: FormatterType;
    };
    severities: {
        [key: string]: SeverityType;
    };
    loggers: {
        [key: string]: LoggerType;
    };
    constructor(events: EventEmitter, colors: any);
    addLogger(name: string, loggerTypeName: string, formatterTypeName: string, ...args: any[]): void;
    removeLogger(name: string): void;
    linkSeverities(target: any): void;
    unlinkSeverities(target: any): void;
}
export default LogManager;
