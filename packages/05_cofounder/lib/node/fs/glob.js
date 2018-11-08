"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var globAll = require("glob-all");
var appendToObject_1 = tslib_1.__importDefault(require("immunity/lib/appendToObject"));
function glob(str, options) {
    return new Promise(function (resolve, reject) {
        var defaultOptions = {
            nosort: true,
            nonull: false,
            nodir: true,
        };
        var options_ = (options === undefined) ?
            defaultOptions :
            appendToObject_1.default(options, defaultOptions);
        globAll(str, options_, function (err, contents) {
            if (err) {
                reject(err);
                return;
            }
            resolve(contents);
        });
    });
}
exports.default = glob;
//# sourceMappingURL=glob.js.map