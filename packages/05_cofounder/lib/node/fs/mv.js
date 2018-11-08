"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var fs = tslib_1.__importStar(require("fs"));
function mv(pathstr, dest) {
    return new Promise(function (resolve, reject) {
        fs.rename(pathstr, dest, function (err) {
            if (err) {
                reject(err);
                return;
            }
            resolve();
        });
    });
}
exports.default = mv;
//# sourceMappingURL=mv.js.map