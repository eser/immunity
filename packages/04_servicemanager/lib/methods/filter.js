"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function filter(collection, predicate) {
    const result = [];
    for (const [dependency, serviceDefinition] of collection.entries()) {
        if (predicate(serviceDefinition, dependency)) {
            result.push(dependency);
        }
    }
    return result;
}
exports.default = filter;
//# sourceMappingURL=filter.js.map