"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function decorate(target, decorator) {
    return function (...args) {
        return decorator(...args, target);
    };
}
exports.default = decorate;
;
//# sourceMappingURL=decorate.js.map