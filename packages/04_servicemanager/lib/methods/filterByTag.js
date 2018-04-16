"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const filter_1 = require("./filter");
function filterByTag(collection, tag) {
    return filter_1.default(collection, (serviceDefinition, dependency) => serviceDefinition.tags.indexOf(tag) >= 0);
}
exports.default = filterByTag;
//# sourceMappingURL=filterByTag.js.map