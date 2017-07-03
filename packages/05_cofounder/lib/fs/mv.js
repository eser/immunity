"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
function mv(pathstr, dest) {
    return new Promise((resolve, reject) => {
        fs.rename(pathstr, dest, (err) => {
            if (err) {
                reject(err);
                return;
            }
            resolve();
        });
    });
}
exports.mv = mv;
;
exports.default = mv;
//# sourceMappingURL=mv.js.map