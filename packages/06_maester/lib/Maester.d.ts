import { EventEmitter } from 'es6-eventemitter/lib/esm';
import { LogManager, SeverityType } from './logging';
import { ExceptionManager } from './exceptions/';
export declare class Maester {
    events: EventEmitter;
    colors: any;
    logging: LogManager;
    exceptions: ExceptionManager;
    paused: boolean;
    constructor();
    setSeverities(severities: {
        [key: string]: SeverityType;
    }): void;
    resume(): void;
    pause(): void;
    log(severity: any, message: any): void;
    logAsync(severity: any, message: any): Promise<void>;
}
export default Maester;
