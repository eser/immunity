"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assign_1 = require("ponyfills/lib/assign");
function takeFromObject(instance, n) {
    let index = 0;
    return Object.keys(instance).reduce((obj, itemKey) => {
        if (index < n) {
            index += 1;
            return assign_1.assign({}, obj, { [itemKey]: instance[itemKey] });
        }
        return obj;
    }, {});
}
exports.takeFromObject = takeFromObject;
exports.default = takeFromObject;
//# sourceMappingURL=index.js.map