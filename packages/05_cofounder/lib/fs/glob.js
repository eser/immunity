"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globAll = require("glob-all");
const appendToObject_1 = require("immunity/lib/appendToObject");
function glob(str, options) {
    return new Promise((resolve, reject) => {
        const defaultOptions = {
            nosort: true,
            nonull: false,
            nodir: true,
        };
        const options_ = (options === undefined) ?
            defaultOptions :
            appendToObject_1.default(options, defaultOptions);
        globAll(str, options_, (err, contents) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(contents);
        });
    });
}
exports.default = glob;
//# sourceMappingURL=glob.js.map