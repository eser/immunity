"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function reverseArray(instance) {
    return instance.reduce((obj, itemValue, itemKey) => {
        return [itemValue, ...obj];
    }, []);
}
exports.default = reverseArray;
//# sourceMappingURL=reverseArray.js.map