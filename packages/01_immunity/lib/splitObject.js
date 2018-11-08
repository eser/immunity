"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var assign_1 = tslib_1.__importDefault(require("ponyfills/lib/assign"));
function splitObject(instance, n) {
    var keys = Object.keys(instance);
    var index = 0;
    return keys.reduce(function (obj, itemKey) {
        var _a, _b;
        if (index < n) {
            index += 1;
            return {
                items: assign_1.default({}, obj.items, (_a = {}, _a[itemKey] = instance[itemKey], _a)),
                rest: obj.rest,
            };
        }
        return {
            items: obj.items,
            rest: assign_1.default({}, obj.rest, (_b = {}, _b[itemKey] = instance[itemKey], _b)),
        };
    }, {
        items: {},
        rest: {},
    });
}
exports.default = splitObject;
//# sourceMappingURL=splitObject.js.map