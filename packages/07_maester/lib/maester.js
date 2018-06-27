"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var baseException_1 = require("./exceptions/baseException");
var logManager_1 = require("./logging/logManager");
var logUtils_1 = require("./logging/logUtils");
var defaultSeverities = {
    debug: { color: 'gray', label: 'debug' },
    info: { color: 'white', label: 'info' },
    warn: { color: 'yellow', label: 'warn' },
    error: { color: 'red', label: 'err!' },
};
var Maester = (function () {
    function Maester() {
        this.events = new EventEmitter();
        this.paused = false;
        this.exceptions = {
            base: baseException_1.default,
        };
        this.logging = new logManager_1.default(this.events, defaultSeverities, 'info');
        logUtils_1.default.linkLogMethods(this.logging, this);
    }
    Maester.prototype.setSeverities = function (severities, level) {
        logUtils_1.default.unlinkLogMethods(this.logging, this);
        this.logging.setSeverities(severities, level);
        logUtils_1.default.linkLogMethods(this.logging, this);
    };
    Maester.prototype.resume = function () {
        if (!this.paused) {
            return;
        }
        this.events.resume();
        this.paused = false;
    };
    Maester.prototype.pause = function () {
        if (this.paused) {
            return;
        }
        this.events.pause();
        this.paused = true;
    };
    return Maester;
}());
exports.default = Maester;
//# sourceMappingURL=maester.js.map