"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assign_1 = require("ponyfills/lib/assign");
function reverseObject(instance) {
    var keys = Object.keys(instance);
    return keys.reduce(function (obj, itemKey) {
        var _a;
        return assign_1.default({}, (_a = {}, _a[itemKey] = instance[itemKey], _a), obj);
    }, {});
}
exports.default = reverseObject;
//# sourceMappingURL=reverseObject.js.map