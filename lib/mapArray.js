"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
function mapArray(instance, predicate) {
    var arrInstance = (instance.constructor === Array) ?
        instance : tslib_1.__spread(instance);
    return arrInstance.map(predicate);
}
exports.default = mapArray;
//# sourceMappingURL=mapArray.js.map