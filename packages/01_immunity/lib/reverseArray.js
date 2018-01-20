"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function reverseArray(instance) {
    const arrInstance = (instance.constructor === Array) ?
        instance :
        [...instance];
    return arrInstance.reduce((obj, itemValue, itemKey) => {
        return [itemValue, ...obj];
    }, []);
}
exports.default = reverseArray;
//# sourceMappingURL=reverseArray.js.map