"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assign_1 = require("ponyfills/lib/assign");
function filterObject(instance, predicate) {
    return Object.keys(instance).reduce(function (obj, itemKey) {
        var _a;
        if (predicate(instance[itemKey], itemKey, obj)) {
            return assign_1.default({}, obj, (_a = {},
                _a[itemKey] = instance[itemKey],
                _a));
        }
        return obj;
    }, {});
}
exports.default = filterObject;
//# sourceMappingURL=filterObject.js.map