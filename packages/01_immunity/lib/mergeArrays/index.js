"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function mergeArrays(...arrays) {
    return arrays.reduce((obj, array) => [...obj, ...array], []);
}
exports.mergeArrays = mergeArrays;
exports.default = mergeArrays;
//# sourceMappingURL=index.js.map