"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prependToArray_1 = require("immunity/lib/prependToArray");
const glob_1 = require("./glob");
const lstat_1 = require("./lstat");
const rm_1 = require("./rm");
const rmdir_1 = require("./rmdir");
const rmdirP_1 = require("./rmdirP");
async function rmP(str, recursiveForDirectories) {
    const list = await glob_1.glob(str, false);
    let directories = [];
    for (const item of list) {
        const itemStat = await lstat_1.lstat(item);
        if (itemStat.isDirectory()) {
            directories = prependToArray_1.prependToArray(directories, item);
            continue;
        }
        await rm_1.rm(item);
    }
    for (const directory of directories) {
        if (recursiveForDirectories) {
            await rmdirP_1.rmdirP(directory);
        }
        else {
            await rmdir_1.rmdir(directory);
        }
    }
}
exports.rmP = rmP;
;
exports.default = rmP;
//# sourceMappingURL=rmP.js.map