"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./node/index");
function Cofounder(strategy) {
    if (strategy === 'node') {
        return index_1.default;
    }
    return null;
}
exports.default = Cofounder;
//# sourceMappingURL=index.js.map