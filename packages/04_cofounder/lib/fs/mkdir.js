"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
function mkdir(pathstr, mode) {
    return new Promise((resolve, reject) => {
        const callback = (err) => {
            if (err) {
                reject(err);
                return;
            }
            resolve();
        };
        if (mode === undefined) {
            fs.mkdir(pathstr, callback);
        }
        else {
            fs.mkdir(pathstr, mode, callback);
        }
    });
}
exports.default = mkdir;
//# sourceMappingURL=mkdir.js.map