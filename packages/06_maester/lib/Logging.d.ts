export declare class Logging {
    owner: any;
    loggerTypes: object;
    loggers: object;
    constructor(owner: any);
    addLoggerType(name: any, loggerType: any): void;
    removeLoggerType(name: any): void;
    getLogger(loggerTypeOrTypeName: any): any;
    addLogger(name: any, loggerTypeOrTypeName: any): void;
    removeLogger(name: any): void;
}
export default Logging;
