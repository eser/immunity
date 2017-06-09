"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ConsoleLogger = (function () {
    function ConsoleLogger(owner) {
        this.owner = owner;
    }
    ConsoleLogger.prototype.log = function (severity, message) {
        var s = this.owner.severities[severity];
        console.log(this.owner.colors[s.color](s.label), message);
    };
    return ConsoleLogger;
}());
exports.ConsoleLogger = ConsoleLogger;
exports.default = ConsoleLogger;
//# sourceMappingURL=ConsoleLogger.js.map