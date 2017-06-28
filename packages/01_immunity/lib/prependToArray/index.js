"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function prependToArray(instance, ...values) {
    return [
        ...values,
        ...instance
    ];
}
exports.prependToArray = prependToArray;
exports.default = prependToArray;
//# sourceMappingURL=index.js.map