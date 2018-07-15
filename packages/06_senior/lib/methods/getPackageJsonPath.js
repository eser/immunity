"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path = require("path");
function getPackageJsonPath(homePath) {
    return path.join(homePath, 'package.json');
}
exports.default = getPackageJsonPath;
//# sourceMappingURL=getPackageJsonPath.js.map