"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BasicFormatter = (function () {
    function BasicFormatter() {
    }
    BasicFormatter.prototype.format = function (severity, message, extraData) {
        return severity.label + " " + message;
    };
    return BasicFormatter;
}());
exports.default = BasicFormatter;
//# sourceMappingURL=basicFormatter.js.map