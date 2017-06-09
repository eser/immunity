"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BaseException = (function () {
    function BaseException(input, exception) {
        if (exception === void 0) { exception = null; }
        var _this = this;
        Object.keys(input).forEach(function (key) {
            if (key in _this) {
                return;
            }
            _this[key] = input[key];
        });
        this.exception = exception;
    }
    BaseException.wrap = function (input, ex) {
        if (ex instanceof this) {
            return ex;
        }
        return new this(input, ex);
    };
    return BaseException;
}());
exports.BaseException = BaseException;
exports.default = BaseException;
//# sourceMappingURL=BaseException.js.map