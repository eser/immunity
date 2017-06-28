"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function splitArray(instance, n) {
    const offset = (n >= 0) ? n : instance.length + n;
    return {
        items: instance.slice(0, offset),
        remainder: instance.slice(offset)
    };
}
exports.splitArray = splitArray;
exports.default = splitArray;
//# sourceMappingURL=index.js.map