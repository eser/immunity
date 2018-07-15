"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getPackageJsonPath_1 = require("./getPackageJsonPath");
var mergeObjects_1 = require("immunity/lib/mergeObjects");
function list(options) {
    var dependencies = {};
    try {
        var packageJsonFile = getPackageJsonPath_1.default(options.homePath);
        var packageJson = require(packageJsonFile);
        if (packageJson.dependencies !== undefined) {
            dependencies = mergeObjects_1.default(dependencies, packageJson.dependencies);
        }
    }
    catch (ex) {
        if (ex.code !== 'MODULE_NOT_FOUND') {
            throw ex;
        }
    }
    return dependencies;
}
exports.default = list;
//# sourceMappingURL=list.js.map