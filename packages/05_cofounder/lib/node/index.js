"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var index_1 = tslib_1.__importDefault(require("./fs/index"));
exports.fs = index_1.default;
var index_2 = tslib_1.__importDefault(require("./json/index"));
exports.json = index_2.default;
var index_3 = tslib_1.__importDefault(require("./os/index"));
exports.os = index_3.default;
var node = {
    fs: index_1.default,
    json: index_2.default,
    os: index_3.default,
};
exports.default = node;
//# sourceMappingURL=index.js.map