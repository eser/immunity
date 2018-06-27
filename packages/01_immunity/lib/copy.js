"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assign_1 = require("ponyfills/lib/assign");
function copy(instance) {
    var type = instance.constructor;
    return Object.keys(instance).reduce(function (obj, itemKey) {
        var _a, _b;
        if (!(instance[itemKey] instanceof Function) && (instance[itemKey] instanceof Object)) {
            return assign_1.default(new type(), obj, (_a = {},
                _a[itemKey] = copy(instance[itemKey]),
                _a));
        }
        return assign_1.default(new type(), obj, (_b = {},
            _b[itemKey] = instance[itemKey],
            _b));
    }, new type());
}
exports.default = copy;
//# sourceMappingURL=copy.js.map