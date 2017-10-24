"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function pipe(...funcs) {
    return funcs.reduce(function (previousValue, currentValue) {
        return function (...args) {
            return currentValue(previousValue(...args));
        };
    });
}
exports.default = pipe;
//# sourceMappingURL=pipe.js.map