"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("./fs/");
exports.fs = fs;
var json = require("./json/");
exports.json = json;
var os = require("./os/");
exports.os = os;
var cofounder = {
    fs: fs,
    json: json,
    os: os,
};
exports.default = cofounder;
//# sourceMappingURL=index.js.map