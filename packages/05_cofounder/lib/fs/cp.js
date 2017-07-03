"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
function cp(pathstr, dest) {
    fs.createReadStream(pathstr)
        .pipe(fs.createWriteStream(dest));
}
exports.cp = cp;
;
exports.default = cp;
//# sourceMappingURL=cp.js.map