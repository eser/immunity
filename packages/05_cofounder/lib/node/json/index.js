"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var loadFile_1 = require("./loadFile");
exports.loadFile = loadFile_1.default;
var saveFile_1 = require("./saveFile");
exports.saveFile = saveFile_1.default;
var jsonMethod = {
    loadFile: loadFile_1.default,
    saveFile: saveFile_1.default,
};
exports.default = jsonMethod;
//# sourceMappingURL=index.js.map