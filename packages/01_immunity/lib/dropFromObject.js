"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assign_1 = require("ponyfills/lib/assign");
function dropFromObject(instance, n) {
    const keys = Object.keys(instance);
    let index = 0;
    return Object.keys(instance).reduce((obj, itemKey) => {
        if (n > index) {
            index += 1;
            return obj;
        }
        return assign_1.default({}, obj, {
            [itemKey]: instance[itemKey],
        });
    }, {});
}
exports.default = dropFromObject;
//# sourceMappingURL=dropFromObject.js.map