export class StreamLogger {
    formatter: any;
    targetStream: any;

    constructor(formatter: any, targetStream: any) {
        this.formatter = formatter;
        this.targetStream = targetStream;
    }

    log(severity: any, message: string, extraData?: any): void {
        this.targetStream.write(`${this.formatter.format(severity, message, extraData)}\n`);
    }
};

export default StreamLogger;
