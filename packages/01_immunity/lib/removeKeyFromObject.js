"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assign_1 = require("ponyfills/lib/assign");
function removeKeyFromObject(instance, ...keys) {
    return Object.keys(instance).reduce((obj, itemKey) => {
        if (keys.indexOf(itemKey) === -1) {
            return assign_1.default({}, obj, {
                [itemKey]: instance[itemKey],
            });
        }
        return obj;
    }, {});
}
exports.default = removeKeyFromObject;
//# sourceMappingURL=removeKeyFromObject.js.map