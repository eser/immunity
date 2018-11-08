"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var index_1 = tslib_1.__importDefault(require("./node/index"));
function Cofounder(strategy) {
    if (strategy === 'node') {
        return index_1.default;
    }
    return null;
}
exports.default = Cofounder;
//# sourceMappingURL=index.js.map