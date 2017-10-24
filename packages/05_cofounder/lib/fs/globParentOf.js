"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globParent_1 = require("./globParent");
function globParentOf(str, pathstr) {
    const str_ = Array.isArray(str) ? str : [str];
    for (const strItem of str_) {
        if (strItem[0] === '!') {
            continue;
        }
        const strItemParent = globParent_1.default(strItem);
        if ((pathstr.length > strItemParent.length) &&
            (pathstr.substring(0, strItemParent.length) === strItemParent)) {
            return strItemParent;
        }
    }
    return null;
}
exports.default = globParentOf;
//# sourceMappingURL=globParentOf.js.map