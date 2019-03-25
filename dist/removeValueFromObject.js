"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var assign_1 = tslib_1.__importDefault(require("ponyfills/assign"));
function removeValueFromObject(instance) {
    var values = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        values[_i - 1] = arguments[_i];
    }
    return Object.keys(instance).reduce(function (obj, itemKey) {
        var _a;
        if (values.indexOf(instance[itemKey]) === -1) {
            return assign_1.default({}, obj, (_a = {},
                _a[itemKey] = instance[itemKey],
                _a));
        }
        return obj;
    }, {});
}
exports.default = removeValueFromObject;
//# sourceMappingURL=removeValueFromObject.js.map