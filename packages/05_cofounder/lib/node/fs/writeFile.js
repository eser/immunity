"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var fs = tslib_1.__importStar(require("fs"));
var appendToObject_1 = tslib_1.__importDefault(require("immunity/lib/appendToObject"));
function writeFile(pathstr, content, options) {
    return new Promise(function (resolve, reject) {
        var defaultOptions = { encoding: 'utf8' };
        var options_ = (options === undefined) ?
            defaultOptions :
            appendToObject_1.default(options, defaultOptions);
        fs.writeFile(pathstr, content, options_, function (err) {
            if (err) {
                reject(err);
                return;
            }
            resolve();
        });
    });
}
exports.default = writeFile;
//# sourceMappingURL=writeFile.js.map