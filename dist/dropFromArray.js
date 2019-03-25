"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
function dropFromArray(instance, n) {
    var arrInstance = (instance.constructor === Array) ?
        instance : tslib_1.__spread(instance);
    return arrInstance.slice(n);
}
exports.default = dropFromArray;
//# sourceMappingURL=dropFromArray.js.map