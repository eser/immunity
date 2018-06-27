"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assign_1 = require("ponyfills/lib/assign");
function removeKeyFromObject(instance) {
    var keys = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        keys[_i - 1] = arguments[_i];
    }
    return Object.keys(instance).reduce(function (obj, itemKey) {
        var _a;
        if (keys.indexOf(itemKey) === -1) {
            return assign_1.default({}, obj, (_a = {},
                _a[itemKey] = instance[itemKey],
                _a));
        }
        return obj;
    }, {});
}
exports.default = removeKeyFromObject;
//# sourceMappingURL=removeKeyFromObject.js.map