import { EventEmitter } from 'es6-eventemitter/lib/EventEmitter';
export declare class Stream extends EventEmitter {
    readable: boolean;
    pipe(destination: any, options?: any): any;
}
export default Stream;
