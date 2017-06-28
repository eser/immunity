export declare class EventEmitter {
    static defaultMaxListeners: number;
    events: {
        [key: string]: any;
    };
    maxListeners: number;
    paused: boolean;
    emitQueue: Array<{
        async: boolean;
        eventName: string;
        params: any;
    }>;
    constructor();
    getMaxListeners(): number;
    setMaxListeners(value: number): EventEmitter;
    eventNames(): string[];
    listenerCount(eventName: string): number;
    listeners(eventName: string, exists: any): any;
    emit(eventName: string, ...args: any[]): boolean;
    emitAsync(eventName: string, ...args: any[]): Promise<boolean>;
    on(eventName: string, listener: any, context?: any, prepend?: any): EventEmitter;
    once(eventName: string, listener: any, context?: any, prepend?: any): EventEmitter;
    off(eventName: string, listener: any): EventEmitter;
    addListener(eventName: string, listener: any, context?: any): EventEmitter;
    prependListener(eventName: string, listener: any, context?: any): EventEmitter;
    prependOnceListener(eventName: string, listener: any, context?: any): EventEmitter;
    removeListener(eventName: string, listener: any): EventEmitter;
    removeAllListeners(eventName: string): void;
    pause(): void;
    resume(): void;
}
export default EventEmitter;
