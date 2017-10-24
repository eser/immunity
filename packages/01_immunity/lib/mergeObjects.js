"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assign_1 = require("ponyfills/lib/assign");
function mergeObjects(...objects) {
    return assign_1.default({}, ...objects);
}
exports.default = mergeObjects;
;
//# sourceMappingURL=mergeObjects.js.map