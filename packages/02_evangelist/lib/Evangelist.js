"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Evangelist = (function () {
    function Evangelist() {
    }
    Evangelist.prototype.wrap = function (target, wrapper) {
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return wrapper.apply(void 0, args.concat([target]));
        };
    };
    Evangelist.prototype.pipe = function () {
        var funcs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            funcs[_i] = arguments[_i];
        }
        return funcs.reduce(function (previousValue, currentValue) {
            return function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return currentValue(previousValue.apply(void 0, args));
            };
        });
    };
    return Evangelist;
}());
exports.Evangelist = Evangelist;
exports.default = Evangelist;
//# sourceMappingURL=Evangelist.js.map