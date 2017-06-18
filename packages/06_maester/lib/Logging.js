"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const immunity = require("immunity");
const flexibleClass_1 = require("./utils/flexibleClass");
class Logging {
    constructor(owner) {
        this.owner = owner;
        this.loggerTypes = {};
        this.loggers = {};
    }
    addLoggerType(name, loggerType) {
        this.loggerTypes = immunity.appendToObject(this.loggerTypes, {
            [name]: flexibleClass_1.flexibleClass(loggerType)
        });
    }
    removeLoggerType(name) {
        this.loggerTypes = immunity.removeKeyFromObject(this.loggerTypes, name);
    }
    getLogger(loggerTypeOrTypeName) {
        if (loggerTypeOrTypeName.constructor === String) {
            return this.loggerTypes[loggerTypeOrTypeName];
        }
        return flexibleClass_1.flexibleClass(loggerTypeOrTypeName);
    }
    addLogger(name, loggerTypeOrTypeName) {
        const loggerType = this.getLogger(loggerTypeOrTypeName), logger = new loggerType(this.owner);
        this.loggers = immunity.appendToObject(this.loggers, {
            [name]: logger
        });
        this.owner.events.on('log', logger.log, logger);
    }
    removeLogger(name) {
        this.owner.events.off('log', this.loggers[name].log);
        this.loggers = immunity.removeKeyFromObject(this.loggers, name);
    }
}
exports.Logging = Logging;
;
exports.default = Logging;
//# sourceMappingURL=Logging.js.map