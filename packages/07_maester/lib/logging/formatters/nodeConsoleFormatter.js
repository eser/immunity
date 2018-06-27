"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var colors = require("colors/safe");
var util = require("util");
var NodeConsoleFormatter = (function () {
    function NodeConsoleFormatter() {
    }
    NodeConsoleFormatter.prototype.format = function (severity, message, extraData) {
        var formatted = colors[severity.color](severity.label) + " " + message;
        if (extraData !== undefined) {
            return formatted + " " + util.inspect(extraData, { depth: null, colors: true });
        }
        return formatted;
    };
    return NodeConsoleFormatter;
}());
exports.default = NodeConsoleFormatter;
//# sourceMappingURL=nodeConsoleFormatter.js.map