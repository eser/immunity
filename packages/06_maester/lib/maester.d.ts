import EventEmitter from 'es6-eventemitter/lib/eventEmitter';
import { SeverityType } from './logging/types';
import LogManager from './logging/logManager';
declare class Maester {
    events: EventEmitter;
    paused: boolean;
    exceptions: {
        [key: string]: any;
    };
    logging: LogManager;
    constructor();
    setSeverities(severities: {
        [key: string]: SeverityType;
    }, level: string): void;
    resume(): void;
    pause(): void;
}
export { Maester as default };
