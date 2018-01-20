"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function splitArray(instance, n) {
    const arrInstance = (instance.constructor === Array) ?
        instance :
        [...instance];
    const offset = (n >= 0) ? n : arrInstance.length + n;
    return {
        items: arrInstance.slice(0, offset),
        rest: arrInstance.slice(offset),
    };
}
exports.default = splitArray;
//# sourceMappingURL=splitArray.js.map