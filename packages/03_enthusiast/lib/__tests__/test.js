"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var compose_1 = tslib_1.__importDefault(require("evangelist/lib/compose"));
var iterate_1 = tslib_1.__importDefault(require("evangelist/lib/iterate"));
var fromNodeStream_1 = tslib_1.__importDefault(require("../fromNodeStream"));
var toNodeStream_1 = tslib_1.__importDefault(require("../toNodeStream"));
var fs = tslib_1.__importStar(require("fs"));
test('copy README.md as README.x.md', function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4, iterate_1.default(fromNodeStream_1.default(fs.createReadStream('./README.md'), 512), compose_1.default(function (item) {
                    var value = item.data.toString('utf8');
                    console.log(value);
                    return value;
                }, toNodeStream_1.default(fs.createWriteStream('./README.x.md'))))];
            case 1:
                _a.sent();
                return [2];
        }
    });
}); });
//# sourceMappingURL=test.js.map