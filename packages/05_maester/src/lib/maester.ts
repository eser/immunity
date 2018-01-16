import BaseException from './exceptions/baseException';
import { SeverityType } from './logging/types';
import LogManager from './logging/logManager';
import LogUtils from './logging/logUtils';

const defaultSeverities = {
    debug: { color: 'gray', label: 'debug' },
    info: { color: 'white', label: 'info' },
    warn: { color: 'yellow', label: 'warn' },
    error: { color: 'red', label: 'err!' },
};

// TODO refactor it without eventemitter
class Maester {
    events: EventEmitter;
    paused: boolean;

    exceptions: { [key: string]: any };
    logging: LogManager;

    constructor() {
        this.events = new EventEmitter();
        this.paused = false;

        this.exceptions = {
            base: BaseException,
        };

        this.logging = new LogManager(this.events, defaultSeverities, 'info');

        LogUtils.linkLogMethods(this.logging, this);
    }

    setSeverities(severities: { [key: string]: SeverityType }, level: string): void {
        LogUtils.unlinkLogMethods(this.logging, this);
        this.logging.setSeverities(severities, level);
        LogUtils.linkLogMethods(this.logging, this);
    }

    resume(): void {
        if (!this.paused) {
            return;
        }

        this.events.resume();
        this.paused = false;
    }

    pause(): void {
        if (this.paused) {
            return;
        }

        this.events.pause();
        this.paused = true;
    }
}

export {
    Maester as default,
};
