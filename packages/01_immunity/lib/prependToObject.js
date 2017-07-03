"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assign_1 = require("ponyfills/lib/assign");
function prependToObject(instance, ...values) {
    return assign_1.assign({}, ...values, instance);
}
exports.prependToObject = prependToObject;
;
exports.default = prependToObject;
//# sourceMappingURL=prependToObject.js.map