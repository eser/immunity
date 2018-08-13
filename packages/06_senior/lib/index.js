"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./npm/index");
function Senior(strategy) {
    if (strategy === 'npm') {
        return index_1.default;
    }
    return null;
}
exports.default = Senior;
//# sourceMappingURL=index.js.map