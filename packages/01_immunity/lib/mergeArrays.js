"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function mergeArrays(...arrays) {
    return arrays.reduce((obj, array) => [...obj, ...array], []);
}
exports.default = mergeArrays;
//# sourceMappingURL=mergeArrays.js.map