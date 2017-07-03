"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const appendToArray_1 = require("immunity/lib/appendToArray");
const splitArray_1 = require("immunity/lib/splitArray");
const mkdir_1 = require("./mkdir");
async function mkdirP(pathstr, mode) {
    let directories = [
        pathstr
    ];
    while (directories.length > 0) {
        const splitted = splitArray_1.splitArray(directories, -1), directory = splitted.items[0];
        directories = splitted.remainder;
        try {
            await mkdir_1.mkdir(directory, mode);
        }
        catch (ex) {
            if (ex.code === 'ENOENT') {
                directories = appendToArray_1.appendToArray(directories, directory, path.dirname(directory));
                continue;
            }
            if (ex.code === 'EEXIST') {
                return;
            }
            throw ex;
        }
    }
}
exports.mkdirP = mkdirP;
;
exports.default = mkdirP;
//# sourceMappingURL=mkdirP.js.map