"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
function removeFirstMatchFromArray(instance, predicate) {
    var arrInstance = (instance.constructor === Array) ?
        instance : tslib_1.__spread(instance);
    var notFound = true;
    return arrInstance.filter(function (itemValue, itemKey, obj) {
        if (notFound && predicate(itemValue, itemKey, obj)) {
            notFound = false;
            return false;
        }
        return true;
    });
}
exports.default = removeFirstMatchFromArray;
//# sourceMappingURL=removeFirstMatchFromArray.js.map