"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assign_1 = require("ponyfills/lib/assign");
function dropFromObject(instance, n) {
    const keys = Object.keys(instance), offset = keys.length - n;
    let index = 0;
    return Object.keys(instance).reduce((obj, itemKey) => {
        if (index >= offset) {
            return assign_1.assign({}, obj, { [itemKey]: instance[itemKey] });
        }
        index += 1;
        return obj;
    }, {});
}
exports.dropFromObject = dropFromObject;
exports.default = dropFromObject;
//# sourceMappingURL=index.js.map