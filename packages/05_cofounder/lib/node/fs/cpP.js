"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var path = tslib_1.__importStar(require("path"));
var cp_1 = tslib_1.__importDefault(require("./cp"));
var glob_1 = tslib_1.__importDefault(require("./glob"));
var globParentOf_1 = tslib_1.__importDefault(require("./globParentOf"));
var mkdirP_1 = tslib_1.__importDefault(require("./mkdirP"));
function cpP(str, dest) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var e_1, _a, list, createdDirectories, list_1, list_1_1, item, globParent, relativePath, relativeBasePath, destFile, e_1_1;
        return tslib_1.__generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4, glob_1.default(str)];
                case 1:
                    list = _b.sent();
                    createdDirectories = [];
                    _b.label = 2;
                case 2:
                    _b.trys.push([2, 8, 9, 10]);
                    list_1 = tslib_1.__values(list), list_1_1 = list_1.next();
                    _b.label = 3;
                case 3:
                    if (!!list_1_1.done) return [3, 7];
                    item = list_1_1.value;
                    globParent = globParentOf_1.default(str, item), relativePath = (globParent !== null) ? item.substring(globParent.length) : item, relativeBasePath = path.dirname(relativePath);
                    if (!(createdDirectories.indexOf(relativeBasePath) === -1)) return [3, 5];
                    return [4, mkdirP_1.default(path.join(dest, relativeBasePath))];
                case 4:
                    _b.sent();
                    createdDirectories = tslib_1.__spread(createdDirectories, [relativeBasePath]);
                    _b.label = 5;
                case 5:
                    destFile = path.join(dest, relativePath);
                    cp_1.default(item, destFile);
                    _b.label = 6;
                case 6:
                    list_1_1 = list_1.next();
                    return [3, 3];
                case 7: return [3, 10];
                case 8:
                    e_1_1 = _b.sent();
                    e_1 = { error: e_1_1 };
                    return [3, 10];
                case 9:
                    try {
                        if (list_1_1 && !list_1_1.done && (_a = list_1.return)) _a.call(list_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                    return [7];
                case 10: return [2];
            }
        });
    });
}
exports.default = cpP;
//# sourceMappingURL=cpP.js.map