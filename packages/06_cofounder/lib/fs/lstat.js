"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
function lstat(pathstr) {
    return new Promise(function (resolve, reject) {
        fs.lstat(pathstr, function (err, stats) {
            if (err) {
                reject(err);
                return;
            }
            resolve(stats);
        });
    });
}
exports.default = lstat;
//# sourceMappingURL=lstat.js.map