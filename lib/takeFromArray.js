"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
function takeFromArray(instance, n) {
    var arrInstance = (instance.constructor === Array) ?
        instance : tslib_1.__spread(instance);
    return arrInstance.slice(0, n);
}
exports.default = takeFromArray;
//# sourceMappingURL=takeFromArray.js.map