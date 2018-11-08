"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var path = tslib_1.__importStar(require("path"));
var splitArray_1 = tslib_1.__importDefault(require("immunity/lib/splitArray"));
var lstat_1 = tslib_1.__importDefault(require("./lstat"));
var readdir_1 = tslib_1.__importDefault(require("./readdir"));
var rm_1 = tslib_1.__importDefault(require("./rm"));
var rmdir_1 = tslib_1.__importDefault(require("./rmdir"));
function rmdirP(pathstr) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var e_1, _a, directories, splitted, directory, list, pushedBack, list_1, list_1_1, item, itemPath, itemStat, ex2_1, e_1_1, ex_1;
        return tslib_1.__generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    directories = [
                        [pathstr, false],
                    ];
                    _b.label = 1;
                case 1:
                    if (!(directories.length > 0)) return [3, 21];
                    splitted = splitArray_1.default(directories, -1);
                    directory = splitted.items[0];
                    directories = splitted.rest;
                    _b.label = 2;
                case 2:
                    _b.trys.push([2, 19, , 20]);
                    if (!directory[1]) return [3, 4];
                    return [4, rmdir_1.default(directory[0])];
                case 3:
                    _b.sent();
                    return [3, 1];
                case 4: return [4, readdir_1.default(directory[0])];
                case 5:
                    list = _b.sent();
                    pushedBack = false;
                    _b.label = 6;
                case 6:
                    _b.trys.push([6, 14, 15, 16]);
                    list_1 = tslib_1.__values(list), list_1_1 = list_1.next();
                    _b.label = 7;
                case 7:
                    if (!!list_1_1.done) return [3, 13];
                    item = list_1_1.value;
                    if (item === '.' || item === '..') {
                        return [3, 12];
                    }
                    itemPath = path.join(directory[0], item);
                    _b.label = 8;
                case 8:
                    _b.trys.push([8, 11, , 12]);
                    return [4, lstat_1.default(itemPath)];
                case 9:
                    itemStat = _b.sent();
                    if (itemStat.isDirectory()) {
                        if (!pushedBack) {
                            directories = tslib_1.__spread(directories, [[directory[0], true]]);
                            pushedBack = true;
                        }
                        directories = tslib_1.__spread(directories, [[itemPath, false]]);
                        return [3, 12];
                    }
                    return [4, rm_1.default(itemPath)];
                case 10:
                    _b.sent();
                    return [3, 12];
                case 11:
                    ex2_1 = _b.sent();
                    if (ex2_1.code === 'ENOENT') {
                        return [2];
                    }
                    throw ex2_1;
                case 12:
                    list_1_1 = list_1.next();
                    return [3, 7];
                case 13: return [3, 16];
                case 14:
                    e_1_1 = _b.sent();
                    e_1 = { error: e_1_1 };
                    return [3, 16];
                case 15:
                    try {
                        if (list_1_1 && !list_1_1.done && (_a = list_1.return)) _a.call(list_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                    return [7];
                case 16:
                    if (!!pushedBack) return [3, 18];
                    return [4, rmdir_1.default(directory[0])];
                case 17:
                    _b.sent();
                    _b.label = 18;
                case 18: return [3, 20];
                case 19:
                    ex_1 = _b.sent();
                    if (ex_1.code === 'ENOENT') {
                        return [2];
                    }
                    throw ex_1;
                case 20: return [3, 1];
                case 21: return [2];
            }
        });
    });
}
exports.default = rmdirP;
//# sourceMappingURL=rmdirP.js.map