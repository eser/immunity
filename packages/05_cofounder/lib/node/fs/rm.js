"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
function rm(pathstr) {
    return new Promise(function (resolve, reject) {
        fs.unlink(pathstr, function (err) {
            if (err) {
                reject(err);
                return;
            }
            resolve();
        });
    });
}
exports.default = rm;
//# sourceMappingURL=rm.js.map