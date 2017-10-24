"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assign_1 = require("ponyfills/lib/assign");
function takeFromObject(instance, n) {
    let index = 0;
    return Object.keys(instance).reduce((obj, itemKey) => {
        if (index < n) {
            index += 1;
            return assign_1.default({}, obj, { [itemKey]: instance[itemKey] });
        }
        return obj;
    }, {});
}
exports.default = takeFromObject;
//# sourceMappingURL=takeFromObject.js.map