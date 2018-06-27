"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var appendToObject_1 = require("immunity/lib/appendToObject");
var removeKeyFromObject_1 = require("immunity/lib/removeKeyFromObject");
var LogManager = (function () {
    function LogManager(events, severities, level) {
        this.events = events;
        this.loggers = {};
        this.setSeverities(severities, level);
    }
    LogManager.prototype.setSeverities = function (severities, level) {
        this.severities = severities;
        this.severityIndexes = Object.keys(severities).reduce(function (obj, itemKey, itemIndex) {
            var _a;
            return appendToObject_1.default(obj, (_a = {}, _a[itemKey] = itemIndex, _a));
        }, {});
        this.level = level;
    };
    LogManager.prototype.createLogger = function (name, loggerType, formatter) {
        var args = [];
        for (var _i = 3; _i < arguments.length; _i++) {
            args[_i - 3] = arguments[_i];
        }
        this.addLogger.apply(this, __spread([name, new loggerType(formatter)], args));
    };
    LogManager.prototype.addLogger = function (name, logger) {
        var _a;
        this.events.on('log', logger.log, logger, false, name);
        this.events.on('write', logger.direct, logger, false, name);
        this.loggers = appendToObject_1.default(this.loggers, (_a = {}, _a[name] = logger, _a));
    };
    LogManager.prototype.removeLogger = function (name) {
        var _this = this;
        if (!(name in this.loggers)) {
            return;
        }
        this.events.offByPredicate('log', function (item) { return (item.listener === _this.loggers[name].log && item.tag === name); });
        this.events.offByPredicate('write', function (item) { return (item.listener === _this.loggers[name].direct && item.tag === name); });
        this.loggers = removeKeyFromObject_1.default(this.loggers, name);
    };
    LogManager.prototype.log = function (severity, message, extraData) {
        if (this.severityIndexes[severity] < this.severityIndexes[this.level]) {
            return;
        }
        this.events.emit('log', this.severities[severity], message, extraData, this);
    };
    LogManager.prototype.logAsync = function (severity, message, extraData) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.severityIndexes[severity] < this.severityIndexes[this.level]) {
                            return [2];
                        }
                        return [4, this.events.emitAsync('log', this.severities[severity], message, extraData, this)];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    LogManager.prototype.write = function (message) {
        this.events.emit('write', message, this);
    };
    LogManager.prototype.writeAsync = function (message) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.events.emitAsync('write', message, this)];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    return LogManager;
}());
exports.default = LogManager;
//# sourceMappingURL=logManager.js.map