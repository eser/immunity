import EventEmitter = require('es6-eventemitter');
import { Logging } from './Logging';
export declare class Maester {
    events: EventEmitter;
    colors: any;
    exception: any;
    logging: Logging;
    paused: boolean;
    severities: object;
    constructor();
    setSeverities(severities: any): void;
    resume(): void;
    pause(): void;
    log(severity: any, message: any): void;
    logAsync(severity: any, message: any): Promise<void>;
}
export default Maester;
