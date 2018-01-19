"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function pickFromArray(instance, items) {
    return instance.reduce((obj, itemValue, itemKey) => {
        if (items.indexOf(itemValue) !== -1) {
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