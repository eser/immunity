"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assign_1 = require("ponyfills/lib/assign");
function copy(instance) {
    const type = instance.constructor;
    return Object.keys(instance).reduce((obj, itemKey) => {
        if (!(instance[itemKey] instanceof Function) && (instance[itemKey] instanceof Object)) {
            return assign_1.default(new type(), obj, {
                [itemKey]: copy(instance[itemKey]),
            });
        }
        return assign_1.default(new type(), obj, {
            [itemKey]: instance[itemKey],
        });
    }, new type());
}
exports.default = copy;
//# sourceMappingURL=copy.js.map