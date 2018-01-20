"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function filterArray(instance, predicate) {
    const arrInstance = (instance.constructor === Array) ?
        instance :
        [...instance];
    return arrInstance.filter(predicate);
}
exports.default = filterArray;
//# sourceMappingURL=filterArray.js.map