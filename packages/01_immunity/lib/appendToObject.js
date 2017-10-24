"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assign_1 = require("ponyfills/lib/assign");
function appendToObject(instance, ...values) {
    return assign_1.default({}, instance, ...values);
}
exports.default = appendToObject;
//# sourceMappingURL=appendToObject.js.map