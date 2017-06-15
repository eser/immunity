export declare class EventEmitter {
    constructor();
    getMaxListeners(): any;
    setMaxListeners(value: any): this;
    eventNames(): string[];
    listenerCount(eventName: any): any;
    listeners(eventName: any, exists: any): any;
    emit(eventName: any, ...args: any[]): boolean;
    emitAsync(eventName: any, ...args: any[]): Promise<boolean>;
    on(eventName: any, listener: any, context: any, prepend: any): this;
    once(eventName: any, listener: any, context: any, prepend: any): this;
    off(eventName: any, listener: any): this;
    addListener(eventName: any, listener: any, context: any): this;
    prependListener(eventName: any, listener: any, context: any): this;
    prependOnceListener(eventName: any, listener: any, context: any): this;
    removeListener(eventName: any, listener: any): this;
    removeAllListeners(eventName: any): void;
    pause(): void;
    resume(): void;
}
export default EventEmitter;
