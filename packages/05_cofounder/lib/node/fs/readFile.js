"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var fs = tslib_1.__importStar(require("fs"));
var appendToObject_1 = tslib_1.__importDefault(require("immunity/lib/appendToObject"));
function readFile(pathstr, options) {
    return new Promise(function (resolve, reject) {
        var defaultOptions = { encoding: 'utf8' };
        var options_ = (options === undefined) ?
            defaultOptions :
            appendToObject_1.default(options, defaultOptions);
        fs.readFile(pathstr, options_, function (err, content) {
            if (err) {
                reject(err);
                return;
            }
            resolve(content);
        });
    });
}
exports.default = readFile;
//# sourceMappingURL=readFile.js.map