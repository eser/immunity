"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const appendToObject_1 = require("immunity/lib/appendToObject");
function readFile(pathstr, options) {
    return new Promise((resolve, reject) => {
        const defaultOptions = { encoding: 'utf8' };
        const options_ = (options === undefined) ?
            defaultOptions :
            appendToObject_1.default(options, defaultOptions);
        fs.readFile(pathstr, options_, (err, content) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(content);
        });
    });
}
exports.default = readFile;
//# sourceMappingURL=readFile.js.map