"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var objectAssign_1 = __importDefault(require("ponyfills/objectAssign"));
function reverseObject(instance) {
    var keys = Object.keys(instance);
    return keys.reduce(function (obj, itemKey) {
        var _a;
        return objectAssign_1.default({}, (_a = {}, _a[itemKey] = instance[itemKey], _a), obj);
    }, {});
}
exports.default = reverseObject;
//# sourceMappingURL=reverseObject.js.map