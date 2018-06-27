"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var filter_1 = require("./filter");
function filterByTag(collection, tag) {
    return filter_1.default(collection, function (serviceDefinition, dependency) { return serviceDefinition.tags.indexOf(tag) >= 0; });
}
exports.default = filterByTag;
//# sourceMappingURL=filterByTag.js.map