"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ConsoleLogger {
    constructor(formatter) {
        this.formatter = formatter;
    }
    log(severity, message, extraData) {
        console.log(this.formatter.format(severity, message, extraData));
    }
    direct(message) {
        console.log(message);
    }
}
exports.ConsoleLogger = ConsoleLogger;
;
exports.default = ConsoleLogger;
//# sourceMappingURL=ConsoleLogger.js.map