"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assign_1 = require("ponyfills/lib/assign");
function filterObject(instance, predicate) {
    return Object.keys(instance).reduce((obj, itemKey) => {
        if (predicate(itemKey, instance[itemKey])) {
            return assign_1.assign({}, obj, {
                [itemKey]: instance[itemKey]
            });
        }
        return obj;
    }, {});
}
exports.filterObject = filterObject;
exports.default = filterObject;
//# sourceMappingURL=index.js.map