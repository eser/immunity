"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const glob_1 = require("./glob");
const lstat_1 = require("./lstat");
const rm_1 = require("./rm");
const rmdir_1 = require("./rmdir");
const rmdirP_1 = require("./rmdirP");
async function rmP(str, recursiveForDirectories) {
    const list = await glob_1.default(str, false);
    let directories = [];
    for (const item of list) {
        const itemStat = await lstat_1.default(item);
        if (itemStat.isDirectory()) {
            directories = [item, ...directories];
            continue;
        }
        await rm_1.default(item);
    }
    for (const directory of directories) {
        if (recursiveForDirectories) {
            await rmdirP_1.default(directory);
        }
        else {
            await rmdir_1.default(directory);
        }
    }
}
exports.default = rmP;
//# sourceMappingURL=rmP.js.map