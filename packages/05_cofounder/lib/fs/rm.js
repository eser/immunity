"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
function rm(pathstr) {
    return new Promise((resolve, reject) => {
        fs.unlink(pathstr, (err) => {
            if (err) {
                reject(err);
                return;
            }
            resolve();
        });
    });
}
exports.rm = rm;
;
exports.default = rm;
//# sourceMappingURL=rm.js.map