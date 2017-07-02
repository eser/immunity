"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const esm_1 = require("es6-eventemitter/lib/esm");
const colors = require("colors/safe");
const logging_1 = require("./logging");
const _1 = require("./exceptions/");
class Maester {
    constructor() {
        this.events = new esm_1.EventEmitter();
        this.colors = colors;
        this.logging = new logging_1.LogManager(this.events, this.colors);
        this.exceptions = new _1.ExceptionManager();
        this.paused = false;
        this.logging.linkSeverities(this);
    }
    setSeverities(severities) {
        this.logging.unlinkSeverities(this);
        this.logging.severities = severities;
        this.logging.linkSeverities(this);
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
        this.events.emit('log', this.logging.severities[severity], message, this);
    }
    async logAsync(severity, message) {
        await this.events.emitAsync('log', this.logging.severities[severity], message, this);
    }
}
exports.Maester = Maester;
exports.default = Maester;
//# sourceMappingURL=Maester.js.map