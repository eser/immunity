"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const glob_1 = require("./glob");
const globParentOf_1 = require("./globParentOf");
const mkdirP_1 = require("./mkdirP");
const mv_1 = require("./mv");
async function mvP(str, dest) {
    const list = await glob_1.default(str, { nodir: false });
    let createdDirectories = [];
    for (const item of list) {
        const globParent = globParentOf_1.default(str, item);
        const relativePath = (globParent !== null) ? item.substring(globParent.length) : item;
        const relativeBasePath = path.dirname(relativePath);
        if (createdDirectories.indexOf(relativeBasePath) === -1) {
            await mkdirP_1.default(path.join(dest, relativeBasePath));
            createdDirectories = [...createdDirectories, relativeBasePath];
        }
        const destFile = path.join(dest, relativePath);
        mv_1.default(item, destFile);
    }
}
exports.default = mvP;
//# sourceMappingURL=mvP.js.map