import { appendToArray } from 'immunity/lib/appendToArray';
import { appendToObject } from 'immunity/lib/appendToObject';
import { mergeArrays } from 'immunity/lib/mergeArrays';
import { prependToArray } from 'immunity/lib/prependToArray';
import { removeKeyFromObject } from 'immunity/lib/removeKeyFromObject';

export type EmitQueueItemType = {
    async: boolean,
    eventName: string,
    params: any
};

export class EventEmitter {
    static defaultMaxListeners = 10;

    events: { [key: string]: any };
    maxListeners: number;
    paused: boolean;
    emitQueue: Array<EmitQueueItemType>;

    constructor() {
        this.events = {};
        this.maxListeners = EventEmitter.defaultMaxListeners;

        this.paused = false;
        this.emitQueue = [];
    }

    getMaxListeners(): number {
        return this.maxListeners;
    }

    setMaxListeners(value: number): EventEmitter {
        this.maxListeners = value;

        return this;
    }

    eventNames(): string[] {
        return Object.getOwnPropertyNames(this.events);
    }

    listenerCount(eventName: string): number {
        const available = this.events.hasOwnProperty(eventName);

        if (!available) {
            return 0;
        }

        const eventListeners = this.events[eventName];

        return eventListeners.on.length + eventListeners.once.length;
    }

    listeners(eventName: string, exists): any {
        const available = this.events.hasOwnProperty(eventName);

        if (exists) {
            return available;
        }

        if (!available) {
            return [];
        }

        const eventListeners = this.events[eventName];

        return mergeArrays(
            eventListeners.on.map((item) => item.listener),
            eventListeners.once.map((item) => item.listener)
        );
    }

    emit(eventName: string, ...args): boolean {
        if (!this.events.hasOwnProperty(eventName)) {
            return false;
        }

        if (this.paused) {
            this.emitQueue = appendToArray(
                this.emitQueue,
                { async: false, eventName: eventName, params: args }
            );

            return true;
        }

        const eventListeners = this.events[eventName],
            listenerCallDelegate = (item) => item.listener.apply(item.context, args);

        this.events = appendToObject(this.events, {
            [eventName]: {
                on: eventListeners.on,
                once: []
            }
        });

        eventListeners.on.forEach(listenerCallDelegate);
        eventListeners.once.forEach(listenerCallDelegate);

        return true;
    }

    async emitAsync(eventName: string, ...args): Promise<boolean> {
        if (!this.events.hasOwnProperty(eventName)) {
            return false;
        }

        if (this.paused) {
            this.emitQueue = appendToArray(
                this.emitQueue,
                { async: true, eventName: eventName, params: args }
            );

            return true;
        }

        const eventListeners = this.events[eventName],
            listenerCallDelegate = (item) => new Promise((resolve, reject) => {
                try {
                    resolve(item.listener.apply(item.context, args));
                }
                catch (err) {
                    reject(err);
                }
            });

        this.events = appendToObject(this.events, {
            [eventName]: {
                on: eventListeners.on,
                once: []
            }
        });

        const result = mergeArrays(
            eventListeners.on.map(listenerCallDelegate),
            eventListeners.once.map(listenerCallDelegate)
        );

        await Promise.all(result);

        return true;
    }

    on(eventName: string, listener, context?, prepend?): EventEmitter {
        if (eventName in this.events) {
            const eventListeners = this.events[eventName];

            this.events = appendToObject(this.events, {
                [eventName]: {
                    on: ((prepend) ? prependToArray : appendToArray)(
                        eventListeners.on,
                        {
                            listener: listener,
                            context: context
                        }
                    ),
                    once: eventListeners.once
                }
            });
        }
        else {
            this.events = appendToObject(this.events, {
                [eventName]: {
                    on: [
                        {
                            listener: listener,
                            context: context
                        }
                    ],
                    once: []
                }
            });
        }

        // this.emit('newListener', eventName, listener);

        return this;
    }

    once(eventName: string, listener, context?, prepend?): EventEmitter {
        if (eventName in this.events) {
            const eventListeners = this.events[eventName];

            this.events = appendToObject(this.events, {
                [eventName]: {
                    on: eventListeners.on,
                    once: ((prepend) ? prependToArray : appendToArray)(
                        eventListeners.once,
                        {
                            listener: listener,
                            context: context
                        }
                    )
                }
            });
        }
        else {
            this.events = appendToObject(this.events, {
                [eventName]: {
                    on: [],
                    once: [
                        {
                            listener: listener,
                            context: context
                        }
                    ]
                }
            });
        }

        // this.emit('newListener', eventName, listener);

        return this;
    }

    off(eventName: string, listener): EventEmitter {
        const listenerRemoveFilter = (item) => item.listener !== listener;

        if (eventName in this.events) {
            const eventListeners = this.events[eventName];

            this.events = appendToObject(this.events, {
                [eventName]: {
                    on: eventListeners.on.filter(listenerRemoveFilter),
                    once: eventListeners.once.filter(listenerRemoveFilter)
                }
            });
        }

        // this.emit('removeListener', eventName, listener);

        return this;
    }

    addListener(eventName: string, listener, context?): EventEmitter {
        return this.on(eventName, listener, context, false);
    }

    prependListener(eventName: string, listener, context?): EventEmitter {
        return this.on(eventName, listener, context, true);
    }

    prependOnceListener(eventName: string, listener, context?): EventEmitter {
        return this.once(eventName, listener, context, true);
    }

    removeListener(eventName: string, listener): EventEmitter {
        return this.off(eventName, listener);
    }

    removeAllListeners(eventName: string): void {
        if (eventName === undefined) {
            this.events = {};

            return;
        }

        this.events = removeKeyFromObject(this.events, eventName);
    }

    pause(): void {
        this.paused = true;
    }

    resume(): void {
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
};

export default EventEmitter;
