"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assign_1 = require("ponyfills/lib/assign");
function mapObject(instance, predicate) {
    return Object.keys(instance).reduce(function (obj, itemKey) {
        var value = predicate(instance[itemKey], itemKey, obj);
        if (value !== null) {
            return assign_1.default({}, obj, value);
        }
        return obj;
    }, {});
}
exports.default = mapObject;
//# sourceMappingURL=mapObject.js.map