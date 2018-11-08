"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var path = tslib_1.__importStar(require("path"));
var splitLastArray_1 = tslib_1.__importDefault(require("immunity/lib/splitLastArray"));
var mkdir_1 = tslib_1.__importDefault(require("./mkdir"));
function mkdirP(pathstr, mode) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var directories, splitted, directory, ex_1;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    directories = [
                        path.normalize(pathstr),
                    ];
                    _a.label = 1;
                case 1:
                    if (!(directories.length > 0)) return [3, 6];
                    splitted = splitLastArray_1.default(directories, 1);
                    directory = splitted.items[0];
                    directories = splitted.rest;
                    if (directory[0] === '.') {
                        return [3, 1];
                    }
                    _a.label = 2;
                case 2:
                    _a.trys.push([2, 4, , 5]);
                    return [4, mkdir_1.default(directory, mode)];
                case 3:
                    _a.sent();
                    return [3, 5];
                case 4:
                    ex_1 = _a.sent();
                    if (ex_1.code === 'ENOENT') {
                        directories = tslib_1.__spread(directories, [directory, path.dirname(directory)]);
                        return [3, 1];
                    }
                    if (ex_1.code === 'EEXIST') {
                        return [2];
                    }
                    throw ex_1;
                case 5: return [3, 1];
                case 6: return [2];
            }
        });
    });
}
exports.default = mkdirP;
//# sourceMappingURL=mkdirP.js.map