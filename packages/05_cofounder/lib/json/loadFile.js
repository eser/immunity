"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readFile_1 = require("../fs/readFile");
async function loadFile(pathstr) {
    const plainContent = await readFile_1.readFile(pathstr);
    return JSON.parse(plainContent);
}
exports.loadFile = loadFile;
;
exports.default = loadFile;
//# sourceMappingURL=loadFile.js.map