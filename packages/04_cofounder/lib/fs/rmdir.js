"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
function rmdir(pathstr) {
    return new Promise((resolve, reject) => {
        fs.rmdir(pathstr, (err) => {
            if (err) {
                reject(err);
                return;
            }
            resolve();
        });
    });
}
exports.default = rmdir;
//# sourceMappingURL=rmdir.js.map