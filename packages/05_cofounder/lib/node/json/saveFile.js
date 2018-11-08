"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var writeFile_1 = tslib_1.__importDefault(require("../fs/writeFile"));
function saveFile(pathstr, objectContent) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var plainContent;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    plainContent = JSON.stringify(objectContent, null, '  ');
                    return [4, writeFile_1.default(pathstr, plainContent)];
                case 1:
                    _a.sent();
                    return [2];
            }
        });
    });
}
exports.default = saveFile;
//# sourceMappingURL=saveFile.js.map