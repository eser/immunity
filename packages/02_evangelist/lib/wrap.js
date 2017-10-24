"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function wrap(target, wrapper) {
    return function (...args) {
        return wrapper(...args, target);
    };
}
exports.default = wrap;
;
//# sourceMappingURL=wrap.js.map