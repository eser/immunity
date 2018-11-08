"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var loadFile_1 = tslib_1.__importDefault(require("./loadFile"));
exports.loadFile = loadFile_1.default;
var saveFile_1 = tslib_1.__importDefault(require("./saveFile"));
exports.saveFile = saveFile_1.default;
var jsonMethod = {
    loadFile: loadFile_1.default,
    saveFile: saveFile_1.default,
};
exports.default = jsonMethod;
//# sourceMappingURL=index.js.map