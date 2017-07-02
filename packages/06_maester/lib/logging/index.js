"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ConsoleLogger_1 = require("./loggers/ConsoleLogger");
const StreamLogger_1 = require("./loggers/StreamLogger");
const BasicFormatter_1 = require("./formatters/BasicFormatter");
exports.defaultSeverities = {
    debug: { color: 'gray', label: 'debug' },
    info: { color: 'white', label: 'info' },
    warn: { color: 'yellow', label: 'warn' },
    error: { color: 'red', label: 'err!' }
};
class LogManager {
    constructor(events, colors) {
        this.events = events;
        this.colors = colors;
        this.loggerTypes = {
            'console': ConsoleLogger_1.ConsoleLogger,
            'stream': StreamLogger_1.StreamLogger
        };
        this.formatters = {
            'basic': new BasicFormatter_1.BasicFormatter(this.colors)
        };
        this.severities = exports.defaultSeverities;
        this.loggers = {};
    }
    addLogger(name, loggerTypeName, formatterTypeName, ...args) {
        const loggerType = this.loggerTypes[loggerTypeName], formatter = this.formatters[formatterTypeName], logger = new loggerType(formatter, ...args);
        this.loggers[name] = logger;
        this.events.on('log', logger.log, logger);
    }
    removeLogger(name) {
        this.events.off('log', this.loggers[name].log);
        delete this.loggers[name];
    }
    linkSeverities(target) {
        for (const severity of Object.keys(this.severities)) {
            target[severity] = (message) => target.log(severity, message);
        }
    }
    unlinkSeverities(target) {
        for (const severity of Object.keys(this.severities)) {
            target[severity] = undefined;
            delete target[severity];
        }
    }
}
exports.LogManager = LogManager;
exports.default = LogManager;
//# sourceMappingURL=index.js.map