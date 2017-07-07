import { assign } from 'ponyfills/lib/assign';
import { EventEmitter } from 'es6-eventemitter/lib/EventEmitter';
import { appendToObject } from 'immunity/lib/appendToObject';
import { removeKeyFromObject } from 'immunity/lib/removeKeyFromObject';
import { ConsoleLogger } from './loggers/ConsoleLogger';
import { StreamLogger } from './loggers/StreamLogger';
import { BasicFormatter } from './formatters/BasicFormatter';
import { NodeConsoleFormatter } from './formatters/NodeConsoleFormatter';

export type SeverityType = {
    color: string,
    label: string
};

export type FormatterType = {
    format(severity: SeverityType, message: string): string
};

export type LoggerType = {
    log(severity: SeverityType, message: string, extraData?: any): void | Promise<void>,
    direct(message: string): void | Promise<void>
};

export type LoggerTypeConstructorType = {
    new(formatter: FormatterType, ...args: Array<any>): LoggerType
};

export const defaultSeverities = {
    debug: { color: 'gray', label: 'debug' },
    info: { color: 'white', label: 'info' },
    warn: { color: 'yellow', label: 'warn' },
    error: { color: 'red', label: 'err!' }
};

export class LogManager {
    events: EventEmitter;

    loggerTypes: { [key: string]: LoggerTypeConstructorType };
    formatters: { [key: string]: FormatterType };
    severities: { [key: string]: SeverityType };
    severityIndexes: { [key: string]: number };
    loggers: { [key: string]: LoggerType };

    level: string;

    constructor(events: EventEmitter) {
        this.events = events;

        this.loggerTypes = {
            'console': ConsoleLogger,
            'stream': StreamLogger
        };
        this.formatters = {
            'basic': new BasicFormatter(),
            'nodeConsole': new NodeConsoleFormatter()
        };
        this.setSeverities(defaultSeverities);
        this.loggers = {};

        this.level = 'info';
    }

    addLogger(name: string, loggerTypeName: string, formatterTypeName: string, ...args: any[]): void {
        const loggerType = this.loggerTypes[loggerTypeName],
            formatter = this.formatters[formatterTypeName],
            logger = new loggerType(formatter, ...args);

        this.loggers = appendToObject(this.loggers, { [name]: logger });

        this.events.on('log', logger.log, logger, false, name);
        this.events.on('write', logger.direct, logger, false, name);
    }

    removeLogger(name: string): void {
        if (!(name in this.loggers)) {
            return;
        }

        this.events.offByPredicate(
            'log',
            (item) => (item.listener === this.loggers[name].log && item.tag === name)
        );

        this.events.offByPredicate(
            'write',
            (item) => (item.listener === this.loggers[name].direct && item.tag === name)
        );

        this.loggers = removeKeyFromObject(this.loggers, name);
    }

    setSeverities(severities: { [key: string]: SeverityType }): void {
        this.severities = severities;

        this.severityIndexes = Object.keys(severities).reduce(
            (obj, itemKey, itemIndex) => {
                return appendToObject(obj, { [itemKey]: itemIndex });
            },
            {}
        );
    }

    linkLogMethods(target: any): void {
        target.log = this.log.bind(this);
        target.logAsync = this.logAsync.bind(this);

        target.write = this.write.bind(this);
        target.writeAsync = this.writeAsync.bind(this);

        for (const severity of Object.keys(this.severities)) {
            target[severity] = (message: string, extraData?: any) => this.log(severity, message, extraData);
        }
    }

    unlinkLogMethods(target: any): void {
        for (const severity of Object.keys(this.severities)) {
            // target[severity] = undefined;

            delete target[severity];
        }

        // target.log = undefined;
        delete target.log;

        // target.logAsync = undefined;
        delete target.logAsync;
    }

    log(severity: string, message: string, extraData?: any): void {
        if (this.severityIndexes[severity] < this.severityIndexes[this.level]) {
            return;
        }

        this.events.emit(
            'log',
            this.severities[severity],
            message,
            extraData,
            this
        );
    }

    async logAsync(severity: string, message: string, extraData?: any): Promise<void> {
        if (this.severityIndexes[severity] < this.severityIndexes[this.level]) {
            return;
        }

        await this.events.emitAsync(
            'log',
            this.severities[severity],
            message,
            extraData,
            this
        );
    }

    write(message: string): void {
        this.events.emit(
            'write',
            message,
            this
        );
    }

    async writeAsync(message: string): Promise<void> {
        await this.events.emitAsync(
            'write',
            message,
            this
        );
    }
};

export default LogManager;
