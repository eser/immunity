"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const splitArray_1 = require("immunity/lib/splitArray");
const mkdir_1 = require("./mkdir");
async function mkdirP(pathstr, mode) {
    let directories = [
        pathstr
    ];
    while (directories.length > 0) {
        const splitted = splitArray_1.default(directories, -1);
        const directory = splitted.items[0];
        directories = splitted.remainder;
        try {
            await mkdir_1.default(directory, mode);
        }
        catch (ex) {
            if (ex.code === 'ENOENT') {
                directories = [...directories, directory, path.dirname(directory)];
                continue;
            }
            if (ex.code === 'EEXIST') {
                return;
            }
            throw ex;
        }
    }
}
exports.default = mkdirP;
//# sourceMappingURL=mkdirP.js.map