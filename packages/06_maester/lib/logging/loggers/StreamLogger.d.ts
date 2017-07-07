export declare class StreamLogger {
    formatter: any;
    targetStream: any;
    constructor(formatter: any, targetStream: any);
    log(severity: any, message: string, extraData?: any): void;
    direct(message: string): void;
}
export default StreamLogger;
