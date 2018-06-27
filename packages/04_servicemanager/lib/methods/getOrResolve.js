"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getOrResolveRange_1 = require("./getOrResolveRange");
function getOrResolve(collection, resolver, dependency) {
    var result = getOrResolveRange_1.default(collection, resolver, dependency);
    return {
        isChanged: result.isChanged,
        result: result.result[0],
        newCollection: result.newCollection,
    };
}
exports.default = getOrResolve;
//# sourceMappingURL=getOrResolve.js.map