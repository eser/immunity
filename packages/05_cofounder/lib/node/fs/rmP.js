"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var glob_1 = tslib_1.__importDefault(require("./glob"));
var lstat_1 = tslib_1.__importDefault(require("./lstat"));
var rm_1 = tslib_1.__importDefault(require("./rm"));
var rmdir_1 = tslib_1.__importDefault(require("./rmdir"));
var rmdirP_1 = tslib_1.__importDefault(require("./rmdirP"));
function rmP(str, recursiveForDirectories) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var e_1, _a, e_2, _b, list, directories, list_1, list_1_1, item, itemStat, e_1_1, directories_1, directories_1_1, directory, e_2_1;
        return tslib_1.__generator(this, function (_c) {
            switch (_c.label) {
                case 0: return [4, glob_1.default(str, false)];
                case 1:
                    list = _c.sent();
                    directories = [];
                    _c.label = 2;
                case 2:
                    _c.trys.push([2, 8, 9, 10]);
                    list_1 = tslib_1.__values(list), list_1_1 = list_1.next();
                    _c.label = 3;
                case 3:
                    if (!!list_1_1.done) return [3, 7];
                    item = list_1_1.value;
                    return [4, lstat_1.default(item)];
                case 4:
                    itemStat = _c.sent();
                    if (itemStat.isDirectory()) {
                        directories = tslib_1.__spread([item], directories);
                        return [3, 6];
                    }
                    return [4, rm_1.default(item)];
                case 5:
                    _c.sent();
                    _c.label = 6;
                case 6:
                    list_1_1 = list_1.next();
                    return [3, 3];
                case 7: return [3, 10];
                case 8:
                    e_1_1 = _c.sent();
                    e_1 = { error: e_1_1 };
                    return [3, 10];
                case 9:
                    try {
                        if (list_1_1 && !list_1_1.done && (_a = list_1.return)) _a.call(list_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                    return [7];
                case 10:
                    _c.trys.push([10, 17, 18, 19]);
                    directories_1 = tslib_1.__values(directories), directories_1_1 = directories_1.next();
                    _c.label = 11;
                case 11:
                    if (!!directories_1_1.done) return [3, 16];
                    directory = directories_1_1.value;
                    if (!recursiveForDirectories) return [3, 13];
                    return [4, rmdirP_1.default(directory)];
                case 12:
                    _c.sent();
                    return [3, 15];
                case 13: return [4, rmdir_1.default(directory)];
                case 14:
                    _c.sent();
                    _c.label = 15;
                case 15:
                    directories_1_1 = directories_1.next();
                    return [3, 11];
                case 16: return [3, 19];
                case 17:
                    e_2_1 = _c.sent();
                    e_2 = { error: e_2_1 };
                    return [3, 19];
                case 18:
                    try {
                        if (directories_1_1 && !directories_1_1.done && (_b = directories_1.return)) _b.call(directories_1);
                    }
                    finally { if (e_2) throw e_2.error; }
                    return [7];
                case 19: return [2];
            }
        });
    });
}
exports.default = rmP;
//# sourceMappingURL=rmP.js.map