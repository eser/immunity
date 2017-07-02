export class BasicFormatter {
    colors: any;

    constructor(colors: any) {
        this.colors = colors;
    }

    format(severity: any, message: string): string {
        return `${this.colors[severity.color](severity.label)} ${message}`;
    }
}

export default BasicFormatter;
