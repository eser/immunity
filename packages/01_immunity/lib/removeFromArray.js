"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function removeFromArray(instance, ...values) {
    const arrInstance = (instance.constructor === Array) ?
        instance :
        [...instance];
    return arrInstance.filter((item) => values.indexOf(item) === -1);
}
exports.default = removeFromArray;
//# sourceMappingURL=removeFromArray.js.map