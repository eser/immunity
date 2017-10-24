import EventEmitter from 'es6-eventemitter/lib/EventEmitter';
import LogManager, { SeverityType } from './logging/';
import ExceptionManager from './exceptions/';

class Maester {
    events: EventEmitter;

    logging: LogManager;
    exceptions: ExceptionManager;

    paused: boolean;

    constructor() {
        this.events = new EventEmitter();

        this.logging = new LogManager(this.events);
        this.exceptions = new ExceptionManager();

        this.paused = false;

        this.logging.linkLogMethods(this);
    }

    setSeverities(severities: { [key: string]: SeverityType }): void {
        this.logging.unlinkLogMethods(this);
        this.logging.setSeverities(severities);
        this.logging.linkLogMethods(this);
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
