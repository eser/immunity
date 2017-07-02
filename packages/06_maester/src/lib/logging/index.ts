import { EventEmitter } from 'es6-eventemitter/lib/esm';
import { ConsoleLogger } from './loggers/ConsoleLogger';
import { StreamLogger } from './loggers/StreamLogger';
import { BasicFormatter } from './formatters/BasicFormatter';

export type SeverityType = {
    color: string,
    label: string
};

export type FormatterType = {
    format(severity: SeverityType, message: string): string
};

export type LoggerType = {
    log(severity: SeverityType, formatter: FormatterType, message: string): void | Promise<void>;
};

export const defaultSeverities = {
    debug: { color: 'gray', label: 'debug' },
    info: { color: 'white', label: 'info' },
    warn: { color: 'yellow', label: 'warn' },
    error: { color: 'red', label: 'err!' }
};

export class LogManager {
    events: EventEmitter;
    colors: any;

    loggerTypes: { [key: string]: any };
    formatters: { [key: string]: FormatterType };
    severities: { [key: string]: SeverityType };
    loggers: { [key: string]: LoggerType };

    constructor(events: EventEmitter, colors: any) {
        this.events = events;
        this.colors = colors;

        this.loggerTypes = {
            'console': ConsoleLogger,
            'stream': StreamLogger
        };
        this.formatters = {
            'basic': new BasicFormatter(this.colors)
        };
        this.severities = defaultSeverities;
        this.loggers = {};
    }

    addLogger(name: string, loggerTypeName: string, formatterTypeName: string, ...args: any[]): void {
        const loggerType = this.loggerTypes[loggerTypeName],
            formatter = this.formatters[formatterTypeName],
            logger = new loggerType(formatter, ...args);

        this.loggers[name] = logger;
        this.events.on('log', logger.log, logger);
    }

    removeLogger(name: string): void {
        this.events.off('log', this.loggers[name].log);

        // this.loggers[name] = undefined;
        delete this.loggers[name];
    }

    linkSeverities(target: any): void {
        for (const severity of Object.keys(this.severities)) {
            target[severity] = (message) => target.log(severity, message);
        }
    }

    unlinkSeverities(target: any): void {
        for (const severity of Object.keys(this.severities)) {
            target[severity] = undefined;
            delete target[severity];
        }
    }
}

export default LogManager;
