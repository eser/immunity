export class ConsoleLogger {
    formatter: any;

    constructor(formatter: any) {
        this.formatter = formatter;
    }

    log(severity: any, message: string): void {
        console.dir(this.formatter.format(severity, message), { depth: null });
    }
}

export default ConsoleLogger;
