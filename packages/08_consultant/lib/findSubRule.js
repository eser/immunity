"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getRuleChildren_1 = require("./getRuleChildren");
async function findSubRule(node, predicate) {
    const children = await getRuleChildren_1.default(node);
    if (children !== undefined) {
        for (const childKey in children) {
            const child = children[childKey];
            if (predicate(childKey, child)) {
                return child;
            }
            if (child.children !== undefined || child.getChildren !== undefined) {
                const result = await findSubRule(child, predicate);
                if (result !== undefined) {
                    return result;
                }
            }
        }
    }
    return undefined;
}
exports.default = findSubRule;
//# sourceMappingURL=findSubRule.js.map