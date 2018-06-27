"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
function mkdir(pathstr, mode) {
    return new Promise(function (resolve, reject) {
        var callback = function (err) {
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