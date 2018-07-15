"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getModuleIndex_1 = require("./getModuleIndex");
var loadFile_1 = require("./loadFile");
function load(options, moduleName, globals, loader) {
    if (loader === void 0) { loader = loadFile_1.default; }
    var moduleIndex = getModuleIndex_1.default(options, moduleName);
    return loader(moduleIndex, globals);
}
exports.default = load;
//# sourceMappingURL=load.js.map