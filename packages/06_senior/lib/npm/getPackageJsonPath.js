"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path = require("path");
function getPackageJsonPath(homePath) {
    var packageJsonFile = path.join(homePath, 'package.json');
    return packageJsonFile;
}
exports.default = getPackageJsonPath;
//# sourceMappingURL=getPackageJsonPath.js.map