import EventEmitter = require('es6-eventemitter');
import immunity = require('immunity');
import colors = require('colors/safe');
import { BaseException } from './exceptions/BaseException';
import { ConsoleLogger } from './loggers/ConsoleLogger';
import { Logging } from './Logging';

export class Maester {
    constructor() {
        this.events = new EventEmitter();
        this.colors = colors;

        this.exception = BaseException;

        this.logging = new Logging(this);
        this.logging.addLoggerType('console', ConsoleLogger);

        this.paused = false;

        this.severities = {};

        this.setSeverities({
            debug: { color: 'gray', label: 'debug' },
            info: { color: 'white', label: 'info' },
            warn: { color: 'yellow', label: 'warn' },
            error: { color: 'red', label: 'err!' }
        });
    }

    setSeverities(severities) {
        for (const severity of Object.keys(this.severities)) {
            this[severity] = undefined;
            delete this[severity];
        }

        this.severities = immunity.copy(severities);

        for (const severity of Object.keys(this.severities)) {
            this[severity] = (...args) => this.log(severity, ...args);
        }
    }

    resume() {
        if (!this.paused) {
            return;
        }

        this.events.resume();
        this.paused = false;
    }

    pause() {
        if (this.paused) {
            return;
        }

        this.events.pause();
        this.paused = true;
    }

    log(severity, message) {
        this.events.emit('log', severity, message, this);
    }

    async logAsync(severity, message) {
        await this.events.emitAsync('log', severity, message, this);
    }
}

export default Maester;
