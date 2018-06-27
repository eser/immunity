"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ConsoleLogger = (function () {
    function ConsoleLogger(formatter) {
        this.formatter = formatter;
    }
    ConsoleLogger.prototype.log = function (severity, message, extraData) {
        console.log(this.formatter.format(severity, message, extraData));
    };
    ConsoleLogger.prototype.direct = function (message) {
        console.log(message);
    };
    return ConsoleLogger;
}());
exports.default = ConsoleLogger;
//# sourceMappingURL=consoleLogger.js.map