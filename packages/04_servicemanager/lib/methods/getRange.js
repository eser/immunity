"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const get_1 = require("./get");
function getRange(collection, ...dependencies) {
    return dependencies.map((dependency) => get_1.default(collection, dependency));
}
exports.default = getRange;
//# sourceMappingURL=getRange.js.map