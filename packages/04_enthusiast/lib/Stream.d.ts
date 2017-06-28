import EventEmitter = require('es6-eventemitter');
export declare class Stream extends EventEmitter {
    readable: boolean;
    pipe(destination: any, options?: any): any;
}
export default Stream;
