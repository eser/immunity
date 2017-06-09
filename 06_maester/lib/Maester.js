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
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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
Object.defineProperty(exports, "__esModule", { value: true });
var EventEmitter = require("es6-eventemitter");
var immunity = require("immunity");
var colors = require("colors/safe");
var BaseException_1 = require("./exceptions/BaseException");
var ConsoleLogger_1 = require("./loggers/ConsoleLogger");
var Logging_1 = require("./Logging");
var Maester = (function () {
    function Maester() {
        this.events = new EventEmitter();
        this.colors = colors;
        this.exception = BaseException_1.BaseException;
        this.logging = new Logging_1.Logging(this);
        this.logging.addLoggerType('console', ConsoleLogger_1.ConsoleLogger);
        this.paused = false;
        this.severities = {};
        this.setSeverities({
            debug: { color: 'gray', label: 'debug' },
            info: { color: 'white', label: 'info' },
            warn: { color: 'yellow', label: 'warn' },
            error: { color: 'red', label: 'err!' }
        });
    }
    Maester.prototype.setSeverities = function (severities) {
        var _this = this;
        for (var _i = 0, _a = Object.keys(this.severities); _i < _a.length; _i++) {
            var severity = _a[_i];
            this[severity] = undefined;
            delete this[severity];
        }
        this.severities = immunity.copy(severities);
        var _loop_1 = function (severity) {
            this_1[severity] = function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return _this.log.apply(_this, [severity].concat(args));
            };
        };
        var this_1 = this;
        for (var _b = 0, _c = Object.keys(this.severities); _b < _c.length; _b++) {
            var severity = _c[_b];
            _loop_1(severity);
        }
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
    Maester.prototype.log = function (severity, message) {
        this.events.emit('log', severity, message, this);
    };
    Maester.prototype.logAsync = function (severity, message) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.events.emitAsync('log', severity, message, this)];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    return Maester;
}());
exports.Maester = Maester;
exports.default = Maester;
//# sourceMappingURL=Maester.js.map