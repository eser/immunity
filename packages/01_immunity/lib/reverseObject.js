"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assign_1 = require("ponyfills/lib/assign");
function reverseObject(instance) {
    const keys = Object.keys(instance);
    return keys.reduce((obj, itemKey) => {
        return assign_1.default({}, { [itemKey]: instance[itemKey] }, obj);
    }, {});
}
exports.default = reverseObject;
//# sourceMappingURL=reverseObject.js.map