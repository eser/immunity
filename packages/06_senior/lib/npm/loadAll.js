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
var list_1 = require("./list");
var load_1 = require("./load");
var appendToObject_1 = require("immunity/lib/appendToObject");
function loadAll(globals, options) {
    var e_1, _a, _b;
    var listResult = list_1.default(options);
    var result = {};
    try {
        for (var _c = __values(Object.keys(listResult)), _d = _c.next(); !_d.done; _d = _c.next()) {
            var dependencyKey = _d.value;
            result = appendToObject_1.default(result, (_b = {},
                _b[dependencyKey] = load_1.default(dependencyKey, globals, options),
                _b));
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return result;
}
exports.default = loadAll;
//# sourceMappingURL=loadAll.js.map