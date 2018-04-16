"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resolveDependency_1 = require("./resolveDependency");
function get(collection, dependency) {
    const serviceDefinition = collection.get(dependency);
    if (serviceDefinition === undefined) {
        return undefined;
    }
    return resolveDependency_1.default(serviceDefinition.target, serviceDefinition.lifetime);
}
exports.default = get;
//# sourceMappingURL=get.js.map