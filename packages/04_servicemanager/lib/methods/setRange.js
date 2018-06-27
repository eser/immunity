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
var serviceDefinitionCollection_1 = require("../serviceDefinitionCollection");
function setRange(collection) {
    var declarations = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        declarations[_i - 1] = arguments[_i];
    }
    var e_1, _a;
    var newCollection = serviceDefinitionCollection_1.cloneServiceDefinitionCollection(collection);
    try {
        for (var declarations_1 = __values(declarations), declarations_1_1 = declarations_1.next(); !declarations_1_1.done; declarations_1_1 = declarations_1.next()) {
            var declaration = declarations_1_1.value;
            newCollection.set(declaration.dependency, {
                target: declaration.target,
                lifetime: declaration.lifetime,
                tags: declaration.tags,
            });
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (declarations_1_1 && !declarations_1_1.done && (_a = declarations_1.return)) _a.call(declarations_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return {
        done: true,
        newCollection: newCollection,
    };
}
exports.default = setRange;
//# sourceMappingURL=setRange.js.map