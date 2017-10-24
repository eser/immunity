class StreamLogger {
    formatter: any;
    targetStream: any;

    constructor(formatter: any, targetStream: any) {
        this.formatter = formatter;
        this.targetStream = targetStream;
    }

    log(severity: any, message: string, extraData?: any): void {
        this.targetStream.write(`${this.formatter.format(severity, message, extraData)}\n`);
    }

    direct(message: string): void {
        this.targetStream.write(`${message}`);
    }
}

export {
    StreamLogger as default,
};
