"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function pickFromArray(instance, items) {
    return instance.reduce((obj, itemValue, itemKey) => {
        if (items.indexOf(itemValue) !== -1) {
            return {
                items: [...obj.items, itemValue],
                remainder: obj.remainder,
            };
        }
        return {
            items: obj.items,
            remainder: [...obj.remainder, itemValue],
        };
    }, {
        items: [],
        remainder: [],
    });
}
exports.default = pickFromArray;
//# sourceMappingURL=pickFromArray.js.map