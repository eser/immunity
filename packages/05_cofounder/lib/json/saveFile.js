"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const writeFile_1 = require("../fs/writeFile");
async function saveFile(pathstr, objectContent) {
    const plainContent = JSON.stringify(objectContent, null, '  ');
    await writeFile_1.writeFile(pathstr, plainContent);
}
exports.saveFile = saveFile;
;
exports.default = saveFile;
//# sourceMappingURL=saveFile.js.map