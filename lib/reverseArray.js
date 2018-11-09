"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
function reverseArray(instance) {
    var arrInstance = (instance.constructor === Array) ?
        instance : tslib_1.__spread(instance);
    return arrInstance.reduce(function (obj, itemValue, itemKey) {
        return tslib_1.__spread([itemValue], obj);
    }, []);
}
exports.default = reverseArray;
//# sourceMappingURL=reverseArray.js.map