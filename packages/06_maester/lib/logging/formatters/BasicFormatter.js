"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BasicFormatter {
    format(severity, message, extraData) {
        return `${severity.label} ${message}`;
    }
}
exports.BasicFormatter = BasicFormatter;
;
exports.default = BasicFormatter;
//# sourceMappingURL=BasicFormatter.js.map