"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var serviceLifetime_1 = require("../serviceLifetime");
var get_1 = require("./get");
var setRange_1 = require("./setRange");
function getOrResolveRange(collection, resolver) {
    var dependencies = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        dependencies[_i - 2] = arguments[_i];
    }
    var result = [];
    var addList = [];
    var _loop_1 = function (dependencyKey) {
        var dependency = dependencies[dependencyKey];
        var existingValue = get_1.default(collection, dependency);
        if (existingValue !== undefined) {
            result.push(existingValue);
            return "continue";
        }
        var resolveFunc = function (target, lifetime, tags) {
            if (lifetime === void 0) { lifetime = serviceLifetime_1.default.Transient; }
            if (tags === void 0) { tags = []; }
            addList.push({
                dependency: dependency,
                target: target,
                lifetime: lifetime,
                tags: tags,
            });
            result.push(target);
        };
        if (resolver !== undefined) {
            resolver(dependency, resolveFunc);
        }
    };
    for (var dependencyKey in dependencies) {
        _loop_1(dependencyKey);
    }
    var isChanged = (addList.length > 0);
    return {
        isChanged: isChanged,
        result: result,
        newCollection: isChanged ?
            setRange_1.default.apply(void 0, __spread([collection], addList)).newCollection :
            collection,
    };
}
exports.default = getOrResolveRange;
//# sourceMappingURL=getOrResolveRange.js.map