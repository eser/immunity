"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BaseException {
    constructor(input, exception = null) {
        Object.keys(input).forEach((key) => {
            if (key in this) {
                return;
            }
            this[key] = input[key];
        });
        this.exception = exception;
    }
    static wrap(input, ex) {
        if (ex instanceof this) {
            return ex;
        }
        return new this(input, ex);
    }
}
exports.BaseException = BaseException;
exports.default = BaseException;
//# sourceMappingURL=BaseException.js.map