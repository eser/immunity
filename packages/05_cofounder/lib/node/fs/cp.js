"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var fs = tslib_1.__importStar(require("fs"));
function cp(pathstr, dest) {
    fs.createReadStream(pathstr)
        .pipe(fs.createWriteStream(dest));
}
exports.default = cp;
//# sourceMappingURL=cp.js.map