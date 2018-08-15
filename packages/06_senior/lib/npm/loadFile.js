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
var appendToObject_1 = require("immunity/lib/appendToObject");
function loadFile(filepath, globals) {
    var e_1, _a, _b, e_2, _c;
    var gBackups = {};
    try {
        for (var _d = __values(Object.keys(globals)), _e = _d.next(); !_e.done; _e = _d.next()) {
            var globalKey = _e.value;
            gBackups = appendToObject_1.default(gBackups, (_b = {}, _b[globalKey] = global[globalKey], _b));
            global[globalKey] = globals[globalKey];
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_e && !_e.done && (_a = _d.return)) _a.call(_d);
        }
        finally { if (e_1) throw e_1.error; }
    }
    try {
        var loadedModule = require(filepath);
        return Promise.resolve(loadedModule);
    }
    catch (ex) {
        if (ex.code !== 'MODULE_NOT_FOUND') {
            throw ex;
        }
    }
    finally {
        try {
            for (var _f = __values(Object.keys(globals)), _g = _f.next(); !_g.done; _g = _f.next()) {
                var globalKey = _g.value;
                global[globalKey] = gBackups[globalKey];
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_g && !_g.done && (_c = _f.return)) _c.call(_f);
            }
            finally { if (e_2) throw e_2.error; }
        }
    }
    return Promise.resolve(null);
}
exports.default = loadFile;
//# sourceMappingURL=loadFile.js.map