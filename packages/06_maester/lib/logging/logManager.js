"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const appendToObject_1 = require("immunity/lib/appendToObject");
const removeKeyFromObject_1 = require("immunity/lib/removeKeyFromObject");
class LogManager {
    constructor(events, severities, level) {
        this.events = events;
        this.loggers = {};
        this.setSeverities(severities, level);
    }
    setSeverities(severities, level) {
        this.severities = severities;
        this.severityIndexes = Object.keys(severities).reduce((obj, itemKey, itemIndex) => {
            return appendToObject_1.default(obj, { [itemKey]: itemIndex });
        }, {});
        this.level = level;
    }
    createLogger(name, loggerType, formatter, ...args) {
        this.addLogger(name, new loggerType(formatter), ...args);
    }
    addLogger(name, logger) {
        this.events.on('log', logger.log, logger, false, name);
        this.events.on('write', logger.direct, logger, false, name);
        this.loggers = appendToObject_1.default(this.loggers, { [name]: logger });
    }
    removeLogger(name) {
        if (!(name in this.loggers)) {
            return;
        }
        this.events.offByPredicate('log', (item) => (item.listener === this.loggers[name].log && item.tag === name));
        this.events.offByPredicate('write', (item) => (item.listener === this.loggers[name].direct && item.tag === name));
        this.loggers = removeKeyFromObject_1.default(this.loggers, name);
    }
    log(severity, message, extraData) {
        if (this.severityIndexes[severity] < this.severityIndexes[this.level]) {
            return;
        }
        this.events.emit('log', this.severities[severity], message, extraData, this);
    }
    async logAsync(severity, message, extraData) {
        if (this.severityIndexes[severity] < this.severityIndexes[this.level]) {
            return;
        }
        await this.events.emitAsync('log', this.severities[severity], message, extraData, this);
    }
    write(message) {
        this.events.emit('write', message, this);
    }
    async writeAsync(message) {
        await this.events.emitAsync('write', message, this);
    }
}
exports.default = LogManager;
//# sourceMappingURL=logManager.js.map