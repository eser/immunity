export class ConsoleLogger {
    formatter: any;

    constructor(formatter: any) {
        this.formatter = formatter;
    }

    log(severity: any, message: string, extraData?: any): void {
        console.log(this.formatter.format(severity, message, extraData));
    }
};

export default ConsoleLogger;
