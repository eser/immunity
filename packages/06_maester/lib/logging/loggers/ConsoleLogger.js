"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ConsoleLogger {
    constructor(formatter) {
        this.formatter = formatter;
    }
    log(severity, message) {
        console.dir(this.formatter.format(severity, message), { depth: null });
    }
}
exports.ConsoleLogger = ConsoleLogger;
exports.default = ConsoleLogger;
//# sourceMappingURL=ConsoleLogger.js.map