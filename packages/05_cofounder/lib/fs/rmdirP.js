"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const appendToArray_1 = require("immunity/lib/appendToArray");
const splitArray_1 = require("immunity/lib/splitArray");
const lstat_1 = require("./lstat");
const readdir_1 = require("./readdir");
const rm_1 = require("./rm");
const rmdir_1 = require("./rmdir");
async function rmdirP(pathstr) {
    let directories = [
        [pathstr, false]
    ];
    while (directories.length > 0) {
        const splitted = splitArray_1.default(directories, -1), directory = splitted.items[0];
        directories = splitted.remainder;
        try {
            if (directory[1]) {
                await rmdir_1.default(directory[0]);
                continue;
            }
            const list = await readdir_1.default(directory[0]);
            let pushedBack = false;
            for (const item of list) {
                if (item === '.' || item === '..') {
                    continue;
                }
                const itemPath = path.join(directory[0], item);
                try {
                    const itemStat = await lstat_1.default(itemPath);
                    if (itemStat.isDirectory()) {
                        if (!pushedBack) {
                            directories = appendToArray_1.default(directories, [directory[0], true]);
                            pushedBack = true;
                        }
                        directories = appendToArray_1.default(directories, [itemPath, false]);
                        continue;
                    }
                    await rm_1.default(itemPath);
                }
                catch (ex2) {
                    if (ex2.code === 'ENOENT') {
                        return;
                    }
                    throw ex2;
                }
            }
            if (!pushedBack) {
                await rmdir_1.default(directory[0]);
            }
        }
        catch (ex) {
            if (ex.code === 'ENOENT') {
                return;
            }
            throw ex;
        }
    }
}
exports.default = rmdirP;
//# sourceMappingURL=rmdirP.js.map