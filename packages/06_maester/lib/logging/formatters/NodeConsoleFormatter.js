"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const colors = require("colors/safe");
const util = require("util");
class NodeConsoleFormatter {
    format(severity, message, extraData) {
        const formatted = `${colors[severity.color](severity.label)} ${message}`;
        if (extraData !== undefined) {
            return `${formatted} ${util.inspect(extraData, { depth: null, colors: true })}`;
        }
        return formatted;
    }
}
exports.default = NodeConsoleFormatter;
//# sourceMappingURL=NodeConsoleFormatter.js.map