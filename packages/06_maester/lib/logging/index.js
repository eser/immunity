"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const appendToObject_1 = require("immunity/lib/appendToObject");
const removeKeyFromObject_1 = require("immunity/lib/removeKeyFromObject");
const ConsoleLogger_1 = require("./loggers/ConsoleLogger");
const StreamLogger_1 = require("./loggers/StreamLogger");
const BasicFormatter_1 = require("./formatters/BasicFormatter");
const NodeConsoleFormatter_1 = require("./formatters/NodeConsoleFormatter");
exports.defaultSeverities = {
    debug: { color: 'gray', label: 'debug' },
    info: { color: 'white', label: 'info' },
    warn: { color: 'yellow', label: 'warn' },
    error: { color: 'red', label: 'err!' }
};
class LogManager {
    constructor(events) {
        this.events = events;
        this.loggerTypes = {
            'console': ConsoleLogger_1.ConsoleLogger,
            'stream': StreamLogger_1.StreamLogger
        };
        this.formatters = {
            'basic': new BasicFormatter_1.BasicFormatter(),
            'nodeConsole': new NodeConsoleFormatter_1.NodeConsoleFormatter()
        };
        this.setSeverities(exports.defaultSeverities);
        this.loggers = {};
        this.level = 'info';
    }
    addLogger(name, loggerTypeName, formatterTypeName, ...args) {
        const loggerType = this.loggerTypes[loggerTypeName], formatter = this.formatters[formatterTypeName], logger = new loggerType(formatter, ...args);
        this.loggers = appendToObject_1.appendToObject(this.loggers, { [name]: logger });
        this.events.on('log', logger.log, logger, false, name);
        this.events.on('write', logger.direct, logger, false, name);
    }
    removeLogger(name) {
        if (!(name in this.loggers)) {
            return;
        }
        this.events.offByPredicate('log', (item) => (item.listener === this.loggers[name].log && item.tag === name));
        this.events.offByPredicate('write', (item) => (item.listener === this.loggers[name].direct && item.tag === name));
        this.loggers = removeKeyFromObject_1.removeKeyFromObject(this.loggers, name);
    }
    setSeverities(severities) {
        this.severities = severities;
        this.severityIndexes = Object.keys(severities).reduce((obj, itemKey, itemIndex) => {
            return appendToObject_1.appendToObject(obj, { [itemKey]: itemIndex });
        }, {});
    }
    linkLogMethods(target) {
        target.log = this.log.bind(this);
        target.logAsync = this.logAsync.bind(this);
        target.write = this.write.bind(this);
        target.writeAsync = this.writeAsync.bind(this);
        for (const severity of Object.keys(this.severities)) {
            target[severity] = (message, extraData) => this.log(severity, message, extraData);
        }
    }
    unlinkLogMethods(target) {
        for (const severity of Object.keys(this.severities)) {
            delete target[severity];
        }
        delete target.log;
        delete target.logAsync;
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
exports.LogManager = LogManager;
;
exports.default = LogManager;
//# sourceMappingURL=index.js.map