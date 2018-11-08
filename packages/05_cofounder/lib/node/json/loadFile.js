"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var readFile_1 = tslib_1.__importDefault(require("../fs/readFile"));
function loadFile(pathstr) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var plainContent;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, readFile_1.default(pathstr)];
                case 1:
                    plainContent = _a.sent();
                    return [2, JSON.parse(plainContent)];
            }
        });
    });
}
exports.default = loadFile;
//# sourceMappingURL=loadFile.js.map