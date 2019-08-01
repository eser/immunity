"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var objectAssign_1 = __importDefault(require("ponyfills/objectAssign"));
function dropFromObject(instance, n) {
    var keys = Object.keys(instance);
    var index = 0;
    return Object.keys(instance).reduce(function (obj, itemKey) {
        var _a;
        if (n > index) {
            index += 1;
            return obj;
        }
        return objectAssign_1.default({}, obj, (_a = {},
            _a[itemKey] = instance[itemKey],
            _a));
    }, {});
}
exports.default = dropFromObject;
//# sourceMappingURL=dropFromObject.js.map