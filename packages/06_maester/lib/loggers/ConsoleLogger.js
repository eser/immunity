"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ConsoleLogger {
    constructor(owner) {
        this.owner = owner;
    }
    log(severity, message) {
        const s = this.owner.severities[severity];
        console.log(this.owner.colors[s.color](s.label), message);
    }
}
exports.ConsoleLogger = ConsoleLogger;
exports.default = ConsoleLogger;
//# sourceMappingURL=ConsoleLogger.js.map