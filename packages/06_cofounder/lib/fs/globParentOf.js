"use strict";
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
var globParent_1 = require("./globParent");
function globParentOf(str, pathstr) {
    var e_1, _a;
    var str_ = Array.isArray(str) ? str : [str];
    try {
        for (var str_1 = __values(str_), str_1_1 = str_1.next(); !str_1_1.done; str_1_1 = str_1.next()) {
            var strItem = str_1_1.value;
            if (strItem[0] === '!') {
                continue;
            }
            var strItemParent = globParent_1.default(strItem);
            if ((pathstr.length > strItemParent.length) &&
                (pathstr.substring(0, strItemParent.length) === strItemParent)) {
                return strItemParent;
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (str_1_1 && !str_1_1.done && (_a = str_1.return)) _a.call(str_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return null;
}
exports.default = globParentOf;
//# sourceMappingURL=globParentOf.js.map