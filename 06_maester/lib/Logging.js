"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var immunity = require("immunity");
var flexibleClass_1 = require("./utils/flexibleClass");
var Logging = (function () {
    function Logging(owner) {
        this.owner = owner;
        this.loggerTypes = {};
        this.loggers = {};
    }
    Logging.prototype.addLoggerType = function (name, loggerType) {
        this.loggerTypes = immunity.appendToObject(this.loggerTypes, (_a = {},
            _a[name] = flexibleClass_1.flexibleClass(loggerType),
            _a));
        var _a;
    };
    Logging.prototype.removeLoggerType = function (name) {
        this.loggerTypes = immunity.removeKeyFromObject(this.loggerTypes, name);
    };
    Logging.prototype.getLogger = function (loggerTypeOrTypeName) {
        if (loggerTypeOrTypeName.constructor === String) {
            return this.loggerTypes[loggerTypeOrTypeName];
        }
        return flexibleClass_1.flexibleClass(loggerTypeOrTypeName);
    };
    Logging.prototype.addLogger = function (name, loggerTypeOrTypeName) {
        var loggerType = this.getLogger(loggerTypeOrTypeName), logger = new loggerType(this.owner);
        this.loggers = immunity.appendToArray(this.loggers, (_a = {},
            _a[name] = logger,
            _a));
        this.owner.events.on('log', logger.log, logger);
        var _a;
    };
    Logging.prototype.removeLogger = function (name) {
        this.owner.events.off('log', this.loggers[name].log);
        this.loggers = immunity.removeKeyFromObject(this.loggers, name);
    };
    return Logging;
}());
exports.Logging = Logging;
;
exports.default = Logging;
//# sourceMappingURL=Logging.js.map