"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const EventEmitter = require("es6-eventemitter");
const immunity = require("immunity");
const colors = require("colors/safe");
const BaseException_1 = require("./exceptions/BaseException");
const ConsoleLogger_1 = require("./loggers/ConsoleLogger");
const Logging_1 = require("./Logging");
class Maester {
    constructor() {
        this.events = new EventEmitter();
        this.colors = colors;
        this.exception = BaseException_1.BaseException;
        this.logging = new Logging_1.Logging(this);
        this.logging.addLoggerType('console', ConsoleLogger_1.ConsoleLogger);
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
            this[severity] = (message) => this.log(severity, message);
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
exports.Maester = Maester;
exports.default = Maester;
//# sourceMappingURL=Maester.js.map