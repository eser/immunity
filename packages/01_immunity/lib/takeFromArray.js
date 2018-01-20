"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function takeFromArray(instance, n) {
    const arrInstance = (instance.constructor === Array) ?
        instance :
        [...instance];
    return arrInstance.slice(0, n);
}
exports.default = takeFromArray;
//# sourceMappingURL=takeFromArray.js.map