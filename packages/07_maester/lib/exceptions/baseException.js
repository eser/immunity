"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var BaseException = (function (_super) {
    __extends(BaseException, _super);
    function BaseException(message, innerDetails) {
        var _this = _super.call(this, message) || this;
        _this.name = _this.constructor.name;
        _this.innerDetails = innerDetails;
        if (Error.captureStackTrace.constructor === Function) {
            Error.captureStackTrace(_this, _this.constructor);
        }
        else {
            _this.stack = (new Error(message)).stack;
        }
        return _this;
    }
    BaseException.wrap = function (errorObject) {
        if (errorObject instanceof this) {
            return errorObject;
        }
        return new this(errorObject.message, errorObject);
    };
    return BaseException;
}(Error));
exports.default = BaseException;
//# sourceMappingURL=baseException.js.map