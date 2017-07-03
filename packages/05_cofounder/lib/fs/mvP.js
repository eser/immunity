"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const appendToArray_1 = require("immunity/lib/appendToArray");
const glob_1 = require("./glob");
const globParentOf_1 = require("./globParentOf");
const mkdirP_1 = require("./mkdirP");
const mv_1 = require("./mv");
async function mvP(str, dest) {
    const list = await glob_1.glob(str, { nodir: false });
    let createdDirectories = [];
    for (const item of list) {
        const globParent = globParentOf_1.globParentOf(str, item), relativePath = (globParent !== null) ? item.substring(globParent.length) : item, relativeBasePath = path.dirname(relativePath);
        if (createdDirectories.indexOf(relativeBasePath) === -1) {
            await mkdirP_1.mkdirP(path.join(dest, relativeBasePath));
            createdDirectories = appendToArray_1.appendToArray(createdDirectories, relativeBasePath);
        }
        const destFile = path.join(dest, relativePath);
        mv_1.mv(item, destFile);
    }
}
exports.mvP = mvP;
;
exports.default = mvP;
//# sourceMappingURL=mvP.js.map