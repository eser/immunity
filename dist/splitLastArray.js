"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
function splitLastArray(instance, n) {
    var arrInstance = (instance.constructor === Array) ?
        instance : tslib_1.__spread(instance);
    var offset = arrInstance.length - n;
    return {
        items: arrInstance.slice(offset),
        rest: arrInstance.slice(0, offset),
    };
}
exports.default = splitLastArray;
//# sourceMappingURL=splitLastArray.js.map