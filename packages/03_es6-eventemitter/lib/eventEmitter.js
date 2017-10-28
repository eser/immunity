"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const appendToArray_1 = require("immunity/lib/appendToArray");
const appendToObject_1 = require("immunity/lib/appendToObject");
const prependToArray_1 = require("immunity/lib/prependToArray");
const removeKeyFromObject_1 = require("immunity/lib/removeKeyFromObject");
class EventEmitter {
    constructor() {
        this.events = {};
        this.maxListeners = EventEmitter.defaultMaxListeners;
        this.paused = false;
        this.emitQueue = [];
    }
    getMaxListeners() {
        return this.maxListeners;
    }
    setMaxListeners(value) {
        this.maxListeners = value;
        return this;
    }
    eventNames() {
        return Object.getOwnPropertyNames(this.events);
    }
    listenerCount(eventName) {
        const available = this.events.hasOwnProperty(eventName);
        if (!available) {
            return 0;
        }
        const eventListeners = this.events[eventName];
        return eventListeners.on.length + eventListeners.once.length;
    }
    listeners(eventName, exists = false) {
        const available = this.events.hasOwnProperty(eventName);
        if (exists) {
            return available;
        }
        if (!available) {
            return [];
        }
        const eventListeners = this.events[eventName];
        return [
            ...eventListeners.on.map((item) => item.listener),
            ...eventListeners.once.map((item) => item.listener),
        ];
    }
    emit(eventName, ...args) {
        if (!this.events.hasOwnProperty(eventName)) {
            return false;
        }
        if (this.paused) {
            this.emitQueue = [
                ...this.emitQueue,
                { async: false, eventName: eventName, params: args },
            ];
            return true;
        }
        const eventListeners = this.events[eventName], listenerCallDelegate = (item) => item.listener.apply(item.context, args);
        this.events = appendToObject_1.default(this.events, {
            [eventName]: {
                on: eventListeners.on,
                once: [],
            },
        });
        eventListeners.on.forEach(listenerCallDelegate);
        eventListeners.once.forEach(listenerCallDelegate);
        return true;
    }
    async emitAsync(eventName, ...args) {
        if (!this.events.hasOwnProperty(eventName)) {
            return false;
        }
        if (this.paused) {
            this.emitQueue = [
                ...this.emitQueue,
                { async: true, eventName: eventName, params: args },
            ];
            return true;
        }
        const eventListeners = this.events[eventName], listenerCallDelegate = (item) => new Promise((resolve, reject) => {
            try {
                resolve(item.listener.apply(item.context, args));
            }
            catch (err) {
                reject(err);
            }
        });
        this.events = appendToObject_1.default(this.events, {
            [eventName]: {
                on: eventListeners.on,
                once: [],
            },
        });
        const result = [
            ...eventListeners.on.map(listenerCallDelegate),
            ...eventListeners.once.map(listenerCallDelegate)
        ];
        await Promise.all(result);
        return true;
    }
    on(eventName, listener, context, prepend = false, tag) {
        if (eventName in this.events) {
            const eventListeners = this.events[eventName];
            this.events = appendToObject_1.default(this.events, {
                [eventName]: {
                    on: ((prepend) ? prependToArray_1.default : appendToArray_1.default)(eventListeners.on, {
                        listener: listener,
                        context: context,
                        tag: tag,
                    }),
                    once: eventListeners.once,
                },
            });
        }
        else {
            this.events = appendToObject_1.default(this.events, {
                [eventName]: {
                    on: [
                        {
                            listener: listener,
                            context: context,
                            tag: tag,
                        },
                    ],
                    once: [],
                },
            });
        }
        return this;
    }
    once(eventName, listener, context, prepend = false, tag) {
        if (eventName in this.events) {
            const eventListeners = this.events[eventName];
            this.events = appendToObject_1.default(this.events, {
                [eventName]: {
                    on: eventListeners.on,
                    once: ((prepend) ? prependToArray_1.default : appendToArray_1.default)(eventListeners.once, {
                        listener: listener,
                        context: context,
                        tag: tag,
                    }),
                },
            });
        }
        else {
            this.events = appendToObject_1.default(this.events, {
                [eventName]: {
                    on: [],
                    once: [
                        {
                            listener: listener,
                            context: context,
                            tag: tag,
                        },
                    ],
                },
            });
        }
        return this;
    }
    offByPredicate(eventName, predicate) {
        if (eventName in this.events) {
            const eventListeners = this.events[eventName];
            this.events = appendToObject_1.default(this.events, {
                [eventName]: {
                    on: eventListeners.on.filter(predicate),
                    once: eventListeners.once.filter(predicate),
                },
            });
        }
        return this;
    }
    off(eventName, listener) {
        return this.offByPredicate(eventName, (item) => item.listener !== listener);
    }
    addListener(eventName, listener, context, tag) {
        return this.on(eventName, listener, context, false, tag);
    }
    prependListener(eventName, listener, context, tag) {
        return this.on(eventName, listener, context, true, tag);
    }
    prependOnceListener(eventName, listener, context, tag) {
        return this.once(eventName, listener, context, true, tag);
    }
    removeListener(eventName, listener) {
        return this.off(eventName, listener);
    }
    removeAllListeners(eventName) {
        if (eventName === undefined) {
            this.events = {};
            return;
        }
        this.events = removeKeyFromObject_1.default(this.events, eventName);
    }
    pause() {
        this.paused = true;
    }
    resume() {
        if (!this.paused) {
            return;
        }
        this.paused = false;
        for (const item of this.emitQueue) {
            if (item.async) {
                this.emitAsync(item.eventName, ...item.params);
            }
            else {
                this.emit(item.eventName, ...item.params);
            }
        }
        this.emitQueue = [];
    }
}
EventEmitter.defaultMaxListeners = 10;
exports.default = EventEmitter;
//# sourceMappingURL=eventEmitter.js.map