export class ConsoleLogger {
    constructor(owner) {
        this.owner = owner;
    }

    log(severity, message) {
        const s = this.owner.severities[severity];

        console.log(this.owner.colors[s.color](s.label), message);
    }
}

export default ConsoleLogger;
