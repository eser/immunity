"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var fs = tslib_1.__importStar(require("fs"));
function rmdir(pathstr) {
    return new Promise(function (resolve, reject) {
        fs.rmdir(pathstr, function (err) {
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