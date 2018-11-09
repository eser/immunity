"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
function pickFromArray(instance, items) {
    var arrInstance = (instance.constructor === Array) ?
        instance : tslib_1.__spread(instance);
    var arrItems = (items.constructor === Array) ?
        items : tslib_1.__spread(items);
    return arrInstance.reduce(function (obj, itemValue, itemKey) {
        if (arrItems.indexOf(itemValue) !== -1) {
            return {
                items: tslib_1.__spread(obj.items, [itemValue]),
                rest: obj.rest,
            };
        }
        return {
            items: obj.items,
            rest: tslib_1.__spread(obj.rest, [itemValue]),
        };
    }, {
        items: [],
        rest: [],
    });
}
exports.default = pickFromArray;
//# sourceMappingURL=pickFromArray.js.map