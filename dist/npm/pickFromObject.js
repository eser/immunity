"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var objectAssign_1 = tslib_1.__importDefault(require("ponyfills/objectAssign"));
function pickFromObject(instance, items) {
    var keys = Object.keys(instance);
    return keys.reduce(function (obj, itemKey) {
        var _a, _b;
        if (items.indexOf(itemKey) !== -1) {
            return {
                items: objectAssign_1.default({}, obj.items, (_a = {}, _a[itemKey] = instance[itemKey], _a)),
                rest: obj.rest,
            };
        }
        return {
            items: obj.items,
            rest: objectAssign_1.default({}, obj.rest, (_b = {}, _b[itemKey] = instance[itemKey], _b)),
        };
    }, {
        items: {},
        rest: {},
    });
}
exports.default = pickFromObject;
//# sourceMappingURL=pickFromObject.js.map