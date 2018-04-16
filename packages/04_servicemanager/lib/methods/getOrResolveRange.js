"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const serviceLifetime_1 = require("../serviceLifetime");
const get_1 = require("./get");
const setRange_1 = require("./setRange");
function getOrResolveRange(collection, resolver, ...dependencies) {
    const result = [];
    const addList = [];
    for (const dependencyKey in dependencies) {
        const dependency = dependencies[dependencyKey];
        const existingValue = get_1.default(collection, dependency);
        if (existingValue !== undefined) {
            result.push(existingValue);
            continue;
        }
        const resolveFunc = (target, lifetime = serviceLifetime_1.default.Transient, tags = []) => {
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
    }
    const isChanged = (addList.length > 0);
    return {
        isChanged: isChanged,
        result: result,
        newCollection: isChanged ?
            setRange_1.default(collection, ...addList).newCollection :
            collection,
    };
}
exports.default = getOrResolveRange;
//# sourceMappingURL=getOrResolveRange.js.map