"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const serviceDefinitionCollection_1 = require("../serviceDefinitionCollection");
function setRange(collection, ...declarations) {
    const newCollection = serviceDefinitionCollection_1.cloneServiceDefinitionCollection(collection);
    for (const declaration of declarations) {
        newCollection.set(declaration.dependency, {
            target: declaration.target,
            lifetime: declaration.lifetime,
            tags: declaration.tags,
        });
    }
    return {
        done: true,
        newCollection: newCollection,
    };
}
exports.default = setRange;
//# sourceMappingURL=setRange.js.map