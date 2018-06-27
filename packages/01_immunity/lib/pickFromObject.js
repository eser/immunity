"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assign_1 = require("ponyfills/lib/assign");
function pickFromObject(instance, items) {
    var keys = Object.keys(instance);
    return keys.reduce(function (obj, itemKey) {
        var _a, _b;
        if (items.indexOf(itemKey) !== -1) {
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
exports.default = pickFromObject;
//# sourceMappingURL=pickFromObject.js.map