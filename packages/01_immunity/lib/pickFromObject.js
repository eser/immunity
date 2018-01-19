"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assign_1 = require("ponyfills/lib/assign");
function pickFromObject(instance, items) {
    const keys = Object.keys(instance);
    return keys.reduce((obj, itemKey) => {
        if (items.indexOf(itemKey) !== -1) {
            return {
                items: assign_1.default({}, obj.items, { [itemKey]: instance[itemKey] }),
                rest: obj.rest,
            };
        }
        return {
            items: obj.items,
            rest: assign_1.default({}, obj.rest, { [itemKey]: instance[itemKey] }),
        };
    }, {
        items: {},
        rest: {},
    });
}
exports.default = pickFromObject;
//# sourceMappingURL=pickFromObject.js.map