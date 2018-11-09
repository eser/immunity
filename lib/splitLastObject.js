"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var assign_1 = tslib_1.__importDefault(require("ponyfills/lib/assign"));
function splitLastObject(instance, n) {
    var keys = Object.keys(instance), offset = keys.length - n;
    var index = 0;
    return keys.reduce(function (obj, itemKey) {
        var _a, _b;
        if (index < offset) {
            index += 1;
            return {
                items: obj.items,
                rest: assign_1.default({}, obj.rest, (_a = {}, _a[itemKey] = instance[itemKey], _a)),
            };
        }
        return {
            items: assign_1.default({}, obj.items, (_b = {}, _b[itemKey] = instance[itemKey], _b)),
            rest: obj.rest,
        };
    }, {
        items: {},
        rest: {},
    });
}
exports.default = splitLastObject;
//# sourceMappingURL=splitLastObject.js.map