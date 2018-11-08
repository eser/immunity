"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
function filterArray(instance, predicate) {
    var arrInstance = (instance.constructor === Array) ?
        instance : tslib_1.__spread(instance);
    return arrInstance.filter(predicate);
}
exports.default = filterArray;
//# sourceMappingURL=filterArray.js.map