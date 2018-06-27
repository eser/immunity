"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var get_1 = require("./get");
function getRange(collection) {
    var dependencies = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        dependencies[_i - 1] = arguments[_i];
    }
    return dependencies.map(function (dependency) { return get_1.default(collection, dependency); });
}
exports.default = getRange;
//# sourceMappingURL=getRange.js.map