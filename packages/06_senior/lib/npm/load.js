"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getModuleIndex_1 = require("./getModuleIndex");
var loadFile_1 = require("./loadFile");
function load(moduleName, globals, options) {
    var moduleIndex = getModuleIndex_1.default(moduleName, options);
    return loadFile_1.default(moduleIndex, globals);
}
exports.default = load;
//# sourceMappingURL=load.js.map