"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var assign_1 = tslib_1.__importDefault(require("ponyfills/assign"));
function mapObject(instance, predicate) {
    return Object.keys(instance).reduce(function (obj, itemKey) {
        var value = predicate(instance[itemKey], itemKey, obj);
        if (value !== null) {
            return assign_1.default({}, obj, value);
        }
        return obj;
    }, {});
}
exports.default = mapObject;
//# sourceMappingURL=mapObject.js.map