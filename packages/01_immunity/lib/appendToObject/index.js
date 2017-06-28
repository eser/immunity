"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assign_1 = require("ponyfills/lib/assign");
function appendToObject(instance, ...values) {
    return assign_1.assign({}, instance, ...values);
}
exports.appendToObject = appendToObject;
exports.default = appendToObject;
//# sourceMappingURL=index.js.map