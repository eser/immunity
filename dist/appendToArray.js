"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
function appendToArray(instance) {
    var values = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        values[_i - 1] = arguments[_i];
    }
    return tslib_1.__spread(instance, values);
}
exports.default = appendToArray;
//# sourceMappingURL=appendToArray.js.map