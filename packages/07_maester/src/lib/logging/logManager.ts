import appendToObject from 'immunity/lib/appendToObject';
import removeKeyFromObject from 'immunity/lib/removeKeyFromObject';

import { SeverityType, FormatterType, LoggerType, LoggerTypeConstructorType } from './types';

// TODO refactor it without eventemitter
class LogManager {
    events: EventEmitter;
    loggers: { [key: string]: LoggerType };

    severities: { [key: string]: SeverityType };
    severityIndexes: { [key: string]: number };
    level: string;

    constructor(events: EventEmitter, severities: { [key: string]: SeverityType }, level: string) {
        this.events = events;
        this.loggers = {};

        this.setSeverities(severities, level);
    }

    setSeverities(severities: { [key: string]: SeverityType }, level: string): void {
        this.severities = severities;
        this.severityIndexes = Object.keys(severities).reduce(
            (obj, itemKey, itemIndex) => {
                return appendToObject(obj, { [itemKey]: itemIndex });
            },
            {},
        );

        this.level = level;
    }

    createLogger(name: string, loggerType: LoggerTypeConstructorType, formatter: FormatterType, ...args: Array<any>): void {
        this.addLogger(name, new loggerType(formatter), ...args);
    }

    addLogger(name: string, logger: LoggerType): void {
        this.events.on('log', logger.log, logger, false, name);
        this.events.on('write', logger.direct, logger, false, name);

        this.loggers = appendToObject(this.loggers, { [name]: logger });
    }

    removeLogger(name: string): void {
        if (!(name in this.loggers)) {
            return;
        }

        this.events.offByPredicate(
            'log',
            (item) => (item.listener === this.loggers[name].log && item.tag === name),
        );

        this.events.offByPredicate(
            'write',
            (item) => (item.listener === this.loggers[name].direct && item.tag === name),
        );

        this.loggers = removeKeyFromObject(this.loggers, name);
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
            this,
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
            this,
        );
    }

    write(message: string): void {
        this.events.emit(
            'write',
            message,
            this,
        );
    }

    async writeAsync(message: string): Promise<void> {
        await this.events.emitAsync(
            'write',
            message,
            this,
        );
    }
}

export {
    LogManager as default,
};
