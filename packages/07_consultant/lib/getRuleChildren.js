"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function getRuleChildren(rule) {
    if (rule.getChildren !== undefined) {
        return await rule.getChildren(rule.id);
    }
    return rule.children;
}
exports.default = getRuleChildren;
//# sourceMappingURL=getRuleChildren.js.map