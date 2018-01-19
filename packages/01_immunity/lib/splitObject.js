"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assign_1 = require("ponyfills/lib/assign");
function splitObject(instance, n) {
    const keys = Object.keys(instance), offset = (n >= 0) ? n : keys.length + n;
    let index = 0;
    return keys.reduce((obj, itemKey) => {
        if (index < offset) {
            index += 1;
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
exports.default = splitObject;
//# sourceMappingURL=splitObject.js.map