import EventEmitter from 'es6-eventemitter/lib/eventEmitter';
import { SeverityType, FormatterType, LoggerType, LoggerTypeConstructorType } from './types';
declare class LogManager {
    events: EventEmitter;
    loggers: {
        [key: string]: LoggerType;
    };
    severities: {
        [key: string]: SeverityType;
    };
    severityIndexes: {
        [key: string]: number;
    };
    level: string;
    constructor(events: EventEmitter, severities: {
        [key: string]: SeverityType;
    }, level: string);
    setSeverities(severities: {
        [key: string]: SeverityType;
    }, level: string): void;
    createLogger(name: string, loggerType: LoggerTypeConstructorType, formatter: FormatterType, ...args: Array<any>): void;
    addLogger(name: string, logger: LoggerType): void;
    removeLogger(name: string): void;
    log(severity: string, message: string, extraData?: any): void;
    logAsync(severity: string, message: string, extraData?: any): Promise<void>;
    write(message: string): void;
    writeAsync(message: string): Promise<void>;
}
export { LogManager as default };
