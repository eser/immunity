"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const eventEmitter_1 = require("es6-eventemitter/lib/eventEmitter");
const baseException_1 = require("./exceptions/baseException");
const logManager_1 = require("./logging/logManager");
const logUtils_1 = require("./logging/logUtils");
const defaultSeverities = {
    debug: { color: 'gray', label: 'debug' },
    info: { color: 'white', label: 'info' },
    warn: { color: 'yellow', label: 'warn' },
    error: { color: 'red', label: 'err!' },
};
class Maester {
    constructor() {
        this.events = new eventEmitter_1.default();
        this.paused = false;
        this.exceptions = {
            base: baseException_1.default,
        };
        this.logging = new logManager_1.default(this.events, defaultSeverities, 'info');
        logUtils_1.default.linkLogMethods(this.logging, this);
    }
    setSeverities(severities, level) {
        logUtils_1.default.unlinkLogMethods(this.logging, this);
        this.logging.setSeverities(severities, level);
        logUtils_1.default.linkLogMethods(this.logging, this);
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
exports.default = Maester;
//# sourceMappingURL=maester.js.map