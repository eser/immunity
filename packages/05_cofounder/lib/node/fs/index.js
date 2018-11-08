"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var cp_1 = tslib_1.__importDefault(require("./cp"));
exports.cp = cp_1.default;
var cpP_1 = tslib_1.__importDefault(require("./cpP"));
exports.cpP = cpP_1.default;
var glob_1 = tslib_1.__importDefault(require("./glob"));
exports.glob = glob_1.default;
var globParent_1 = tslib_1.__importDefault(require("./globParent"));
exports.globParent = globParent_1.default;
var globParentOf_1 = tslib_1.__importDefault(require("./globParentOf"));
exports.globParentOf = globParentOf_1.default;
var lstat_1 = tslib_1.__importDefault(require("./lstat"));
exports.lstat = lstat_1.default;
var mkdir_1 = tslib_1.__importDefault(require("./mkdir"));
exports.mkdir = mkdir_1.default;
var mkdirP_1 = tslib_1.__importDefault(require("./mkdirP"));
exports.mkdirP = mkdirP_1.default;
var mv_1 = tslib_1.__importDefault(require("./mv"));
exports.mv = mv_1.default;
var mvP_1 = tslib_1.__importDefault(require("./mvP"));
exports.mvP = mvP_1.default;
var readdir_1 = tslib_1.__importDefault(require("./readdir"));
exports.readdir = readdir_1.default;
var readFile_1 = tslib_1.__importDefault(require("./readFile"));
exports.readFile = readFile_1.default;
var rm_1 = tslib_1.__importDefault(require("./rm"));
exports.rm = rm_1.default;
var rmdir_1 = tslib_1.__importDefault(require("./rmdir"));
exports.rmdir = rmdir_1.default;
var rmdirP_1 = tslib_1.__importDefault(require("./rmdirP"));
exports.rmdirP = rmdirP_1.default;
var rmP_1 = tslib_1.__importDefault(require("./rmP"));
exports.rmP = rmP_1.default;
var writeFile_1 = tslib_1.__importDefault(require("./writeFile"));
exports.writeFile = writeFile_1.default;
var writeFileP_1 = tslib_1.__importDefault(require("./writeFileP"));
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