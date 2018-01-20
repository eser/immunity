"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function dropFromArray(instance, n) {
    const arrInstance = (instance.constructor === Array) ?
        instance :
        [...instance];
    return arrInstance.slice(n);
}
exports.default = dropFromArray;
//# sourceMappingURL=dropFromArray.js.map