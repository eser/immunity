"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var serviceLifetime_1 = require("../serviceLifetime");
function resolveDependency(target, lifetime) {
    if (lifetime === serviceLifetime_1.default.Singleton || !(target instanceof Function)) {
        return target;
    }
    return target();
}
exports.default = resolveDependency;
//# sourceMappingURL=resolveDependency.js.map