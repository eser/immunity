"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class StreamLogger {
    constructor(formatter, targetStream) {
        this.formatter = formatter;
        this.targetStream = targetStream;
    }
    log(severity, message) {
        this.targetStream.write(`${this.formatter.format(severity, message)}\n`);
    }
}
exports.StreamLogger = StreamLogger;
exports.default = StreamLogger;
//# sourceMappingURL=StreamLogger.js.map