"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const mkdirP_1 = require("./mkdirP");
const writeFile_1 = require("./writeFile");
async function writeFileP(pathstr, content, options) {
    const parentDirectory = path.dirname(pathstr);
    await mkdirP_1.default(parentDirectory);
    await writeFile_1.default(pathstr, content, options);
}
exports.default = writeFileP;
//# sourceMappingURL=writeFileP.js.map