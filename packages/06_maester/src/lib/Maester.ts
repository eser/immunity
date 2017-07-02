import { EventEmitter } from 'es6-eventemitter/lib/esm';
import colors = require('colors/safe');
import { LogManager, SeverityType } from './logging';
import { ExceptionManager } from './exceptions/';

export class Maester {
    events: EventEmitter;
    colors: any;

    logging: LogManager;
    exceptions: ExceptionManager;

    paused: boolean;

    constructor() {
        this.events = new EventEmitter();
        this.colors = colors;

        this.logging = new LogManager(this.events, this.colors);
        this.exceptions = new ExceptionManager();

        this.paused = false;

        this.logging.linkSeverities(this);
    }

    setSeverities(severities: { [key: string]: SeverityType }): void {
        this.logging.unlinkSeverities(this);
        this.logging.severities = severities;
        this.logging.linkSeverities(this);
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

    log(severity, message): void {
        this.events.emit(
            'log',
            this.logging.severities[severity],
            message,
            this
        );
    }

    async logAsync(severity, message): Promise<void> {
        await this.events.emitAsync(
            'log',
            this.logging.severities[severity],
            message,
            this
        );
    }
}

export default Maester;
