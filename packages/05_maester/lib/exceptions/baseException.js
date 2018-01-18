"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BaseException extends Error {
    constructor(message, innerDetails) {
        super(message);
        this.name = this.constructor.name;
        this.innerDetails = innerDetails;
        if (Error.captureStackTrace.constructor === Function) {
            Error.captureStackTrace(this, this.constructor);
        }
        else {
            this.stack = (new Error(message)).stack;
        }
    }
    static wrap(errorObject) {
        if (errorObject instanceof this) {
            return errorObject;
        }
        return new this(errorObject.message, errorObject);
    }
}
exports.default = BaseException;
//# sourceMappingURL=baseException.js.map