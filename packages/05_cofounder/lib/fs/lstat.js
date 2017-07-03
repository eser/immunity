"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
function lstat(pathstr) {
    return new Promise((resolve, reject) => {
        fs.lstat(pathstr, (err, stats) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(stats);
        });
    });
}
exports.lstat = lstat;
;
exports.default = lstat;
//# sourceMappingURL=lstat.js.map