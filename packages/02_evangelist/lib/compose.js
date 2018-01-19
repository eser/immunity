"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function compose(...funcs) {
    return funcs.reduce(function (previousValue, currentValue) {
        return function (...args) {
            return currentValue(previousValue(...args));
        };
    });
}
exports.default = compose;
//# sourceMappingURL=compose.js.map