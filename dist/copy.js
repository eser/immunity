"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var objectAssign_1 = __importDefault(require("ponyfills/objectAssign"));
function copy(instance) {
    var Type = instance.constructor;
    return Object.keys(instance).reduce(function (obj, itemKey) {
        var _a, _b;
        if (!(instance[itemKey] instanceof Function) && (instance[itemKey] instanceof Object)) {
            return objectAssign_1.default(new Type(), obj, (_a = {},
                _a[itemKey] = copy(instance[itemKey]),
                _a));
        }
        return objectAssign_1.default(new Type(), obj, (_b = {},
            _b[itemKey] = instance[itemKey],
            _b));
    }, new Type());
}
exports.default = copy;
//# sourceMappingURL=copy.js.map