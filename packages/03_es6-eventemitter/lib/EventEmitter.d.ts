export declare type EmitQueueItemType = {
    async: boolean;
    eventName: string;
    params: any;
};
export declare class EventEmitter {
    static defaultMaxListeners: number;
    events: {
        [key: string]: any;
    };
    maxListeners: number;
    paused: boolean;
    emitQueue: Array<EmitQueueItemType>;
    constructor();
    getMaxListeners(): number;
    setMaxListeners(value: number): EventEmitter;
    eventNames(): Array<string>;
    listenerCount(eventName: string): number;
    listeners(eventName: string, exists?: boolean): boolean | Array<any>;
    emit(eventName: string, ...args: any[]): boolean;
    emitAsync(eventName: string, ...args: Array<any>): Promise<boolean>;
    on(eventName: string, listener: any, context?: any, prepend?: boolean, tag?: string): EventEmitter;
    once(eventName: string, listener: any, context?: any, prepend?: boolean, tag?: string): EventEmitter;
    offByPredicate(eventName: string, predicate: (itemValue) => boolean): EventEmitter;
    off(eventName: string, listener: any): EventEmitter;
    addListener(eventName: string, listener: any, context?: any, tag?: string): EventEmitter;
    prependListener(eventName: string, listener: any, context?: any, tag?: string): EventEmitter;
    prependOnceListener(eventName: string, listener: any, context?: any, tag?: string): EventEmitter;
    removeListener(eventName: string, listener: any): EventEmitter;
    removeAllListeners(eventName: string): void;
    pause(): void;
    resume(): void;
}
export default EventEmitter;
