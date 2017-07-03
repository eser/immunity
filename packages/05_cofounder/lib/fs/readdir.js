"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const appendToObject_1 = require("immunity/lib/appendToObject");
function readdir(pathstr, options) {
    return new Promise((resolve, reject) => {
        const defaultOptions = { encoding: 'utf8' };
        const options_ = (options === undefined) ?
            defaultOptions :
            appendToObject_1.appendToObject(options, defaultOptions);
        fs.readdir(pathstr, options_, (err, contents) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(contents);
        });
    });
}
exports.readdir = readdir;
;
exports.default = readdir;
//# sourceMappingURL=readdir.js.map