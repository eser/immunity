"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getModulePath_1 = require("./getModulePath");
var path = require("path");
function getModuleIndex(options, moduleName) {
    var pathstr = getModulePath_1.default(moduleName), modulePackage = path.join(pathstr, 'package.json');
    try {
        var contents = require(modulePackage), entryPoint = contents["main:" + options.name];
        if (entryPoint !== undefined) {
            return path.join(pathstr, entryPoint);
        }
    }
    catch (ex) {
        if (ex.code !== 'MODULE_NOT_FOUND') {
            throw ex;
        }
    }
    return pathstr;
}
exports.default = getModuleIndex;
//# sourceMappingURL=getModuleIndex.js.map