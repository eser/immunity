"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var objectAssign_1 = __importDefault(require("ponyfills/objectAssign"));
function mapObject(instance, predicate) {
    return Object.keys(instance).reduce(function (obj, itemKey) {
        var value = predicate(instance[itemKey], itemKey, obj);
        if (value !== null) {
            return objectAssign_1.default({}, obj, value);
        }
        return obj;
    }, {});
}
exports.default = mapObject;
//# sourceMappingURL=mapObject.js.map