"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StreamLogger = (function () {
    function StreamLogger(formatter, targetStream) {
        this.formatter = formatter;
        this.targetStream = targetStream;
    }
    StreamLogger.prototype.log = function (severity, message, extraData) {
        this.targetStream.write(this.formatter.format(severity, message, extraData) + "\n");
    };
    StreamLogger.prototype.direct = function (message) {
        this.targetStream.write("" + message);
    };
    return StreamLogger;
}());
exports.default = StreamLogger;
//# sourceMappingURL=streamLogger.js.map