"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BaseException {
    constructor(input, exception = null) {
        for (let key in input) {
            if (key in this) {
                continue;
            }
            this[key] = input[key];
        }
        this.exception = exception;
    }
    static wrap(input, ex) {
        if (ex instanceof this) {
            return ex;
        }
        return new this(input, ex);
    }
}
exports.default = BaseException;
//# sourceMappingURL=BaseException.js.map