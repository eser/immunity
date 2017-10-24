"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assign_1 = require("ponyfills/lib/assign");
function removeFirstMatchFromObject(instance, predicate) {
    let notFound = true;
    return Object.keys(instance).reduce((obj, itemKey) => {
        if (notFound && predicate(itemKey, instance[itemKey], obj)) {
            notFound = false;
            return obj;
        }
        return assign_1.default({}, obj, {
            [itemKey]: instance[itemKey],
        });
    }, {});
}
exports.default = removeFirstMatchFromObject;
//# sourceMappingURL=removeFirstMatchFromObject.js.map