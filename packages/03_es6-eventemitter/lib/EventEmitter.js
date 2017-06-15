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
var immunity = require("immunity");
var EventEmitter = (function () {
    function EventEmitter() {
        this.events = {};
        this.maxListeners = this.constructor.defaultMaxListeners;
        this.paused = false;
        this.emitQueue = [];
    }
    EventEmitter.prototype.getMaxListeners = function () {
        return this.maxListeners;
    };
    EventEmitter.prototype.setMaxListeners = function (value) {
        this.maxListeners = value;
        return this;
    };
    EventEmitter.prototype.eventNames = function () {
        return Object.getOwnPropertyNames(this.events);
    };
    EventEmitter.prototype.listenerCount = function (eventName) {
        var available = this.events.hasOwnProperty(eventName);
        if (!available) {
            return 0;
        }
        var eventListeners = this.events[eventName];
        return eventListeners.on.length + eventListeners.once.length;
    };
    EventEmitter.prototype.listeners = function (eventName, exists) {
        var available = this.events.hasOwnProperty(eventName);
        if (exists) {
            return available;
        }
        if (!available) {
            return [];
        }
        var eventListeners = this.events[eventName];
        return immunity.mergeArrays(eventListeners.on.map(function (item) { return item.listener; }), eventListeners.once.map(function (item) { return item.listener; }));
    };
    EventEmitter.prototype.emit = function (eventName) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (!this.events.hasOwnProperty(eventName)) {
            return false;
        }
        if (this.paused) {
            this.emitQueue = immunity.appendToArray(this.emitQueue, { async: false, eventName: eventName, params: args });
            return true;
        }
        var eventListeners = this.events[eventName], listenerCallDelegate = function (item) { return item.listener.apply(item.context, args); };
        this.events = immunity.appendToObject(this.events, (_a = {},
            _a[eventName] = {
                on: eventListeners.on,
                once: []
            },
            _a));
        eventListeners.on.forEach(listenerCallDelegate);
        eventListeners.once.forEach(listenerCallDelegate);
        return true;
        var _a;
    };
    EventEmitter.prototype.emitAsync = function (eventName) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return __awaiter(this, void 0, void 0, function () {
            var eventListeners, listenerCallDelegate, result, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!this.events.hasOwnProperty(eventName)) {
                            return [2, false];
                        }
                        if (this.paused) {
                            this.emitQueue = immunity.appendToArray(this.emitQueue, { async: true, eventName: eventName, params: args });
                            return [2, true];
                        }
                        eventListeners = this.events[eventName], listenerCallDelegate = function (item) { return new Promise(function (resolve, reject) {
                            try {
                                resolve(item.listener.apply(item.context, args));
                            }
                            catch (err) {
                                reject(err);
                            }
                        }); };
                        this.events = immunity.appendToObject(this.events, (_a = {},
                            _a[eventName] = {
                                on: eventListeners.on,
                                once: []
                            },
                            _a));
                        result = immunity.mergeArrays(eventListeners.on.map(listenerCallDelegate), eventListeners.once.map(listenerCallDelegate));
                        return [4, Promise.all(result)];
                    case 1:
                        _b.sent();
                        return [2, true];
                }
            });
        });
    };
    EventEmitter.prototype.on = function (eventName, listener, context, prepend) {
        if (eventName in this.events) {
            var eventListeners = this.events[eventName];
            this.events = immunity.appendToObject(this.events, (_a = {},
                _a[eventName] = {
                    on: ((prepend) ? immunity.prependToArray : immunity.appendToArray)(eventListeners.on, {
                        listener: listener,
                        context: context
                    }),
                    once: eventListeners.once
                },
                _a));
        }
        else {
            this.events = immunity.appendToObject(this.events, (_b = {},
                _b[eventName] = {
                    on: [
                        {
                            listener: listener,
                            context: context
                        }
                    ],
                    once: []
                },
                _b));
        }
        return this;
        var _a, _b;
    };
    EventEmitter.prototype.once = function (eventName, listener, context, prepend) {
        if (eventName in this.events) {
            var eventListeners = this.events[eventName];
            this.events = immunity.appendToObject(this.events, (_a = {},
                _a[eventName] = {
                    on: eventListeners.on,
                    once: ((prepend) ? immunity.prependToArray : immunity.appendToArray)(eventListeners.once, {
                        listener: listener,
                        context: context
                    })
                },
                _a));
        }
        else {
            this.events = immunity.appendToObject(this.events, (_b = {},
                _b[eventName] = {
                    on: [],
                    once: [
                        {
                            listener: listener,
                            context: context
                        }
                    ]
                },
                _b));
        }
        return this;
        var _a, _b;
    };
    EventEmitter.prototype.off = function (eventName, listener) {
        var listenerRemoveFilter = function (item) { return item.listener !== listener; };
        if (eventName in this.events) {
            var eventListeners = this.events[eventName];
            this.events = immunity.appendToObject(this.events, (_a = {},
                _a[eventName] = {
                    on: eventListeners.on.filter(listenerRemoveFilter),
                    once: eventListeners.once.filter(listenerRemoveFilter)
                },
                _a));
        }
        return this;
        var _a;
    };
    EventEmitter.prototype.addListener = function (eventName, listener, context) {
        return this.on(eventName, listener, context, false);
    };
    EventEmitter.prototype.prependListener = function (eventName, listener, context) {
        return this.on(eventName, listener, context, true);
    };
    EventEmitter.prototype.prependOnceListener = function (eventName, listener, context) {
        return this.once(eventName, listener, context, true);
    };
    EventEmitter.prototype.removeListener = function (eventName, listener) {
        return this.off(eventName, listener);
    };
    EventEmitter.prototype.removeAllListeners = function (eventName) {
        if (eventName === undefined) {
            this.events = {};
            return;
        }
        this.events = immunity.removeKeyFromObject(this.events, eventName);
    };
    EventEmitter.prototype.pause = function () {
        this.paused = true;
    };
    EventEmitter.prototype.resume = function () {
        if (!this.paused) {
            return;
        }
        this.paused = false;
        for (var _i = 0, _a = this.emitQueue; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.async) {
                this.emitAsync.apply(this, [item.eventName].concat(item.params));
            }
            else {
                this.emit.apply(this, [item.eventName].concat(item.params));
            }
        }
        this.emitQueue = [];
    };
    return EventEmitter;
}());
exports.EventEmitter = EventEmitter;
EventEmitter.defaultMaxListeners = 10;
exports.default = EventEmitter;
//# sourceMappingURL=EventEmitter.js.map