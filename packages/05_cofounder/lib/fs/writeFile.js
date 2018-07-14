"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var appendToObject_1 = require("immunity/lib/appendToObject");
function writeFile(pathstr, content, options) {
    return new Promise(function (resolve, reject) {
        var defaultOptions = { encoding: 'utf8' };
        var options_ = (options === undefined) ?
            defaultOptions :
            appendToObject_1.default(options, defaultOptions);
        fs.writeFile(pathstr, content, options_, function (err) {
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