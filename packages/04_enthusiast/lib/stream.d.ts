import EventEmitter from 'es6-eventemitter/lib/eventEmitter';
declare class Stream extends EventEmitter {
    readable: boolean;
    pipe(destination: any, options?: any): any;
}
export { Stream as default };
