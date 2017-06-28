"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function wrap(target, wrapper) {
    return function (...args) {
        return wrapper(...args, target);
    };
}
exports.wrap = wrap;
exports.default = wrap;
//# sourceMappingURL=index.js.map