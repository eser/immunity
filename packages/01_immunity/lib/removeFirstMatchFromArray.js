"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function removeFirstMatchFromArray(instance, predicate) {
    let notFound = true;
    return instance.filter((itemValue, itemKey, obj) => {
        if (notFound && predicate(itemValue, itemKey, obj)) {
            notFound = false;
            return false;
        }
        return true;
    });
}
exports.default = removeFirstMatchFromArray;
//# sourceMappingURL=removeFirstMatchFromArray.js.map