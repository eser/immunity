"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Evangelist {
    wrap(target, wrapper) {
        return function (...args) {
            return wrapper(...args, target);
        };
    }
    pipe(...funcs) {
        return funcs.reduce(function (previousValue, currentValue) {
            return function (...args) {
                return currentValue(previousValue(...args));
            };
        });
    }
}
exports.Evangelist = Evangelist;
exports.default = Evangelist;
//# sourceMappingURL=Evangelist.js.map