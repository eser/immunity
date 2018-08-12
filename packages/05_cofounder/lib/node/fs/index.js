"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cp_1 = require("./cp");
exports.cp = cp_1.default;
var cpP_1 = require("./cpP");
exports.cpP = cpP_1.default;
var glob_1 = require("./glob");
exports.glob = glob_1.default;
var globParent_1 = require("./globParent");
exports.globParent = globParent_1.default;
var globParentOf_1 = require("./globParentOf");
exports.globParentOf = globParentOf_1.default;
var lstat_1 = require("./lstat");
exports.lstat = lstat_1.default;
var mkdir_1 = require("./mkdir");
exports.mkdir = mkdir_1.default;
var mkdirP_1 = require("./mkdirP");
exports.mkdirP = mkdirP_1.default;
var mv_1 = require("./mv");
exports.mv = mv_1.default;
var mvP_1 = require("./mvP");
exports.mvP = mvP_1.default;
var readdir_1 = require("./readdir");
exports.readdir = readdir_1.default;
var readFile_1 = require("./readFile");
exports.readFile = readFile_1.default;
var rm_1 = require("./rm");
exports.rm = rm_1.default;
var rmdir_1 = require("./rmdir");
exports.rmdir = rmdir_1.default;
var rmdirP_1 = require("./rmdirP");
exports.rmdirP = rmdirP_1.default;
var rmP_1 = require("./rmP");
exports.rmP = rmP_1.default;
var writeFile_1 = require("./writeFile");
exports.writeFile = writeFile_1.default;
var writeFileP_1 = require("./writeFileP");
exports.writeFileP = writeFileP_1.default;
var fsMethods = {
    cp: cp_1.default,
    cpP: cpP_1.default,
    glob: glob_1.default,
    lstat: lstat_1.default,
    mkdir: mkdir_1.default,
    mkdirP: mkdirP_1.default,
    mv: mv_1.default,
    mvP: mvP_1.default,
    readdir: readdir_1.default,
    readFile: readFile_1.default,
    rm: rm_1.default,
    rmdir: rmdir_1.default,
    rmdirP: rmdirP_1.default,
    rmP: rmP_1.default,
    writeFile: writeFile_1.default,
    writeFileP: writeFileP_1.default,
};
exports.default = fsMethods;
//# sourceMappingURL=index.js.map