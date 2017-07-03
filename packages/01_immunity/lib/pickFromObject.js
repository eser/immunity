"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assign_1 = require("ponyfills/lib/assign");
function pickFromObject(instance, items) {
    const keys = Object.keys(instance);
    return keys.reduce((obj, itemKey) => {
        if (items.indexOf(itemKey) !== -1) {
            return {
                items: assign_1.assign({}, obj.items, { [itemKey]: instance[itemKey] }),
                remainder: obj.remainder
            };
        }
        return {
            items: obj.items,
            remainder: assign_1.assign({}, obj.remainder, { [itemKey]: instance[itemKey] })
        };
    }, {
        items: {},
        remainder: {}
    });
}
exports.pickFromObject = pickFromObject;
;
exports.default = pickFromObject;
//# sourceMappingURL=pickFromObject.js.map