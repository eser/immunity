"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var path = tslib_1.__importStar(require("path"));
var mkdirP_1 = tslib_1.__importDefault(require("./mkdirP"));
var writeFile_1 = tslib_1.__importDefault(require("./writeFile"));
function writeFileP(pathstr, content, options) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var parentDirectory;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    parentDirectory = path.dirname(pathstr);
                    return [4, mkdirP_1.default(parentDirectory)];
                case 1:
                    _a.sent();
                    return [4, writeFile_1.default(pathstr, content, options)];
                case 2:
                    _a.sent();
                    return [2];
            }
        });
    });
}
exports.default = writeFileP;
//# sourceMappingURL=writeFileP.js.map