"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assign_1 = require("ponyfills/lib/assign");
function filterObject(instance, predicate) {
    return Object.keys(instance).reduce((obj, itemKey) => {
        if (predicate(itemKey, instance[itemKey], obj)) {
            return assign_1.default({}, obj, {
                [itemKey]: instance[itemKey],
            });
        }
        return obj;
    }, {});
}
exports.default = filterObject;
//# sourceMappingURL=filterObject.js.map