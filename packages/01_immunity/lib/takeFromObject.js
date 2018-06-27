"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assign_1 = require("ponyfills/lib/assign");
function takeFromObject(instance, n) {
    var index = 0;
    return Object.keys(instance).reduce(function (obj, itemKey) {
        var _a;
        if (index < n) {
            index += 1;
            return assign_1.default({}, obj, (_a = {}, _a[itemKey] = instance[itemKey], _a));
        }
        return obj;
    }, {});
}
exports.default = takeFromObject;
//# sourceMappingURL=takeFromObject.js.map