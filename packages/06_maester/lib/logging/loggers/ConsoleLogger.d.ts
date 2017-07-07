export declare class ConsoleLogger {
    formatter: any;
    constructor(formatter: any);
    log(severity: any, message: string, extraData?: any): void;
    direct(message: string): void;
}
export default ConsoleLogger;
