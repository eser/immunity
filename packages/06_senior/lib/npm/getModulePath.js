"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path = require("path");
function getModulePath(homePath, moduleName) {
    var modulePath = path.join(homePath, 'node_modules', moduleName);
    return modulePath;
}
exports.default = getModulePath;
//# sourceMappingURL=getModulePath.js.map