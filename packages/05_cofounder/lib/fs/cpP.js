"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const appendToArray_1 = require("immunity/lib/appendToArray");
const cp_1 = require("./cp");
const glob_1 = require("./glob");
const globParentOf_1 = require("./globParentOf");
const mkdirP_1 = require("./mkdirP");
async function cpP(str, dest) {
    const list = await glob_1.glob(str);
    let createdDirectories = [];
    for (const item of list) {
        const globParent = globParentOf_1.globParentOf(str, item), relativePath = (globParent !== null) ? item.substring(globParent.length) : item, relativeBasePath = path.dirname(relativePath);
        if (createdDirectories.indexOf(relativeBasePath) === -1) {
            await mkdirP_1.mkdirP(path.join(dest, relativeBasePath));
            createdDirectories = appendToArray_1.appendToArray(createdDirectories, relativeBasePath);
        }
        const destFile = path.join(dest, relativePath);
        cp_1.cp(item, destFile);
    }
}
exports.cpP = cpP;
;
exports.default = cpP;
//# sourceMappingURL=cpP.js.map