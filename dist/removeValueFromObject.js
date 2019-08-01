"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var objectAssign_1 = __importDefault(require("ponyfills/objectAssign"));
function removeValueFromObject(instance) {
    var values = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        values[_i - 1] = arguments[_i];
    }
    return Object.keys(instance).reduce(function (obj, itemKey) {
        var _a;
        if (values.indexOf(instance[itemKey]) === -1) {
            return objectAssign_1.default({}, obj, (_a = {},
                _a[itemKey] = instance[itemKey],
                _a));
        }
        return obj;
    }, {});
}
exports.default = removeValueFromObject;
//# sourceMappingURL=removeValueFromObject.js.map