"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var assign_1 = tslib_1.__importDefault(require("ponyfills/assign"));
function dropFromObject(instance, n) {
    var keys = Object.keys(instance);
    var index = 0;
    return Object.keys(instance).reduce(function (obj, itemKey) {
        var _a;
        if (n > index) {
            index += 1;
            return obj;
        }
        return assign_1.default({}, obj, (_a = {},
            _a[itemKey] = instance[itemKey],
            _a));
    }, {});
}
exports.default = dropFromObject;
//# sourceMappingURL=dropFromObject.js.map