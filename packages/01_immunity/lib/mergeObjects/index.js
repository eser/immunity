"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assign_1 = require("ponyfills/lib/assign");
function mergeObjects(...objects) {
    return assign_1.assign({}, ...objects);
}
exports.mergeObjects = mergeObjects;
exports.default = mergeObjects;
//# sourceMappingURL=index.js.map