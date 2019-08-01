"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var objectAssign_1 = __importDefault(require("ponyfills/objectAssign"));
function filterObject(instance, predicate) {
    return Object.keys(instance).reduce(function (obj, itemKey) {
        var _a;
        if (predicate(instance[itemKey], itemKey, obj)) {
            return objectAssign_1.default({}, obj, (_a = {},
                _a[itemKey] = instance[itemKey],
                _a));
        }
        return obj;
    }, {});
}
exports.default = filterObject;
//# sourceMappingURL=filterObject.js.map