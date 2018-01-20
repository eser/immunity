"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function removeFirstMatchFromArray(instance, predicate) {
    const arrInstance = (instance.constructor === Array) ?
        instance :
        [...instance];
    let notFound = true;
    return arrInstance.filter((itemValue, itemKey, obj) => {
        if (notFound && predicate(itemValue, itemKey, obj)) {
            notFound = false;
            return false;
        }
        return true;
    });
}
exports.default = removeFirstMatchFromArray;
//# sourceMappingURL=removeFirstMatchFromArray.js.map