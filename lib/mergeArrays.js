"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
function mergeArrays() {
    var arrays = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arrays[_i] = arguments[_i];
    }
    return arrays.reduce(function (obj, array) { return tslib_1.__spread(obj, array); }, []);
}
exports.default = mergeArrays;
//# sourceMappingURL=mergeArrays.js.map