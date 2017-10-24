import EventEmitter from 'es6-eventemitter/lib/EventEmitter';
import LogManager, { SeverityType } from './logging/';
import ExceptionManager from './exceptions/';
declare class Maester {
    events: EventEmitter;
    logging: LogManager;
    exceptions: ExceptionManager;
    paused: boolean;
    constructor();
    setSeverities(severities: {
        [key: string]: SeverityType;
    }): void;
    resume(): void;
    pause(): void;
}
export { Maester as default };
