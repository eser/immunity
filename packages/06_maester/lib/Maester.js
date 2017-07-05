"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const EventEmitter_1 = require("es6-eventemitter/lib/EventEmitter");
const _1 = require("./logging/");
const _2 = require("./exceptions/");
class Maester {
    constructor() {
        this.events = new EventEmitter_1.EventEmitter();
        this.logging = new _1.LogManager(this.events);
        this.exceptions = new _2.ExceptionManager();
        this.paused = false;
        this.logging.linkLogMethods(this);
    }
    setSeverities(severities) {
        this.logging.unlinkLogMethods(this);
        this.logging.setSeverities(severities);
        this.logging.linkLogMethods(this);
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
}
exports.Maester = Maester;
;
exports.default = Maester;
//# sourceMappingURL=Maester.js.map