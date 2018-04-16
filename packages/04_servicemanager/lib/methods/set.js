"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const serviceLifetime_1 = require("../serviceLifetime");
const setRange_1 = require("./setRange");
function set(collection, dependency, target, lifetime = serviceLifetime_1.default.Transient, tags = []) {
    return setRange_1.default(collection, {
        dependency: dependency,
        target: target,
        lifetime: lifetime,
        tags: tags,
    });
}
exports.default = set;
//# sourceMappingURL=set.js.map