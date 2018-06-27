"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var serviceLifetime_1 = require("../serviceLifetime");
var setRange_1 = require("./setRange");
function set(collection, dependency, target, lifetime, tags) {
    if (lifetime === void 0) { lifetime = serviceLifetime_1.default.Transient; }
    if (tags === void 0) { tags = []; }
    return setRange_1.default(collection, {
        dependency: dependency,
        target: target,
        lifetime: lifetime,
        tags: tags,
    });
}
exports.default = set;
//# sourceMappingURL=set.js.map