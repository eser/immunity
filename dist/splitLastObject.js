"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var objectAssign_1 = __importDefault(require("ponyfills/objectAssign"));
function splitLastObject(instance, n) {
    var keys = Object.keys(instance);
    var offset = keys.length - n;
    var index = 0;
    return keys.reduce(function (obj, itemKey) {
        var _a, _b;
        if (index < offset) {
            index += 1;
            return {
                items: obj.items,
                rest: objectAssign_1.default({}, obj.rest, (_a = {}, _a[itemKey] = instance[itemKey], _a)),
            };
        }
        return {
            items: objectAssign_1.default({}, obj.items, (_b = {}, _b[itemKey] = instance[itemKey], _b)),
            rest: obj.rest,
        };
    }, {
        items: {},
        rest: {},
    });
}
exports.default = splitLastObject;
//# sourceMappingURL=splitLastObject.js.map