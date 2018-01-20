"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function pickFromArray(instance, items) {
    const arrInstance = (instance.constructor === Array) ?
        instance :
        [...instance];
    const arrItems = (items.constructor === Array) ?
        items :
        [...items];
    return arrInstance.reduce((obj, itemValue, itemKey) => {
        if (arrItems.indexOf(itemValue) !== -1) {
            return {
                items: [...obj.items, itemValue],
                rest: obj.rest,
            };
        }
        return {
            items: obj.items,
            rest: [...obj.rest, itemValue],
        };
    }, {
        items: [],
        rest: [],
    });
}
exports.default = pickFromArray;
//# sourceMappingURL=pickFromArray.js.map