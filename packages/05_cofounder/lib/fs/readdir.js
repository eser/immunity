"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var appendToObject_1 = require("immunity/lib/appendToObject");
function readdir(pathstr, options) {
    return new Promise(function (resolve, reject) {
        var defaultOptions = { encoding: 'utf8' };
        var options_ = (options === undefined) ?
            defaultOptions :
            appendToObject_1.default(options, defaultOptions);
        fs.readdir(pathstr, options_, function (err, contents) {
            if (err) {
                reject(err);
                return;
            }
            resolve(contents);
        });
    });
}
exports.default = readdir;
//# sourceMappingURL=readdir.js.map