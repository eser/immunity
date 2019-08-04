"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var objectAssign_1 = tslib_1.__importDefault(require("ponyfills/objectAssign"));
function takeFromObject(instance, n) {
    var index = 0;
    return Object.keys(instance).reduce(function (obj, itemKey) {
        var _a;
        if (index < n) {
            index += 1;
            return objectAssign_1.default({}, obj, (_a = {}, _a[itemKey] = instance[itemKey], _a));
        }
        return obj;
    }, {});
}
exports.default = takeFromObject;
//# sourceMappingURL=takeFromObject.js.map