"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
function removeFromArray(instance) {
    var values = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        values[_i - 1] = arguments[_i];
    }
    var arrInstance = (instance.constructor === Array) ?
        instance : tslib_1.__spread(instance);
    return arrInstance.filter(function (item) { return values.indexOf(item) === -1; });
}
exports.default = removeFromArray;
//# sourceMappingURL=removeFromArray.js.map