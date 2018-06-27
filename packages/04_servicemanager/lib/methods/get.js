"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var resolveDependency_1 = require("./resolveDependency");
function get(collection, dependency) {
    var serviceDefinition = collection.get(dependency);
    if (serviceDefinition === undefined) {
        return undefined;
    }
    return resolveDependency_1.default(serviceDefinition.target, serviceDefinition.lifetime);
}
exports.default = get;
//# sourceMappingURL=get.js.map