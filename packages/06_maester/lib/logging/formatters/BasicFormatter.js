"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BasicFormatter {
    constructor(colors) {
        this.colors = colors;
    }
    format(severity, message) {
        return `${this.colors[severity.color](severity.label)} ${message}`;
    }
}
exports.BasicFormatter = BasicFormatter;
exports.default = BasicFormatter;
//# sourceMappingURL=BasicFormatter.js.map