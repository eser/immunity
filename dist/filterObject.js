"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var objectAssign_1 = tslib_1.__importDefault(require("ponyfills/objectAssign"));
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