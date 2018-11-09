"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var assign_1 = tslib_1.__importDefault(require("ponyfills/lib/assign"));
function prependToObject(instance) {
    var values = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        values[_i - 1] = arguments[_i];
    }
    return assign_1.default.apply(void 0, tslib_1.__spread([{}], values, [instance]));
}
exports.default = prependToObject;
//# sourceMappingURL=prependToObject.js.map