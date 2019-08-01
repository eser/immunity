"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
function pickFromArray(instance, items) {
    var arrInstance = (instance.constructor === Array) ?
        instance : __spread(instance);
    var arrItems = (items.constructor === Array) ?
        items : __spread(items);
    return arrInstance.reduce(function (obj, itemValue, itemKey) {
        if (arrItems.indexOf(itemValue) !== -1) {
            return {
                items: __spread(obj.items, [itemValue]),
                rest: obj.rest,
            };
        }
        return {
            items: obj.items,
            rest: __spread(obj.rest, [itemValue]),
        };
    }, {
        items: [],
        rest: [],
    });
}
exports.default = pickFromArray;
//# sourceMappingURL=pickFromArray.js.map