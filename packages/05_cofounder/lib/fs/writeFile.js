"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const appendToObject_1 = require("immunity/lib/appendToObject");
function writeFile(pathstr, content, options) {
    return new Promise((resolve, reject) => {
        const defaultOptions = { encoding: 'utf8' };
        const options_ = (options === undefined) ?
            defaultOptions :
            appendToObject_1.default(options, defaultOptions);
        fs.writeFile(pathstr, content, options_, (err) => {
            if (err) {
                reject(err);
                return;
            }
            resolve();
        });
    });
}
exports.default = writeFile;
//# sourceMappingURL=writeFile.js.map