"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var assign_1 = tslib_1.__importDefault(require("ponyfills/lib/assign"));
function mergeObjects() {
    var objects = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        objects[_i] = arguments[_i];
    }
    return assign_1.default.apply(void 0, tslib_1.__spread([{}], objects));
}
exports.default = mergeObjects;
;
//# sourceMappingURL=mergeObjects.js.map