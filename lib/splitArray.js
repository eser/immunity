"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
function splitArray(instance, n) {
    var arrInstance = (instance.constructor === Array) ?
        instance : tslib_1.__spread(instance);
    return {
        items: arrInstance.slice(0, n),
        rest: arrInstance.slice(n),
    };
}
exports.default = splitArray;
//# sourceMappingURL=splitArray.js.map