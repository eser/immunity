"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var searchRepository_1 = require("./searchRepository");
exports.searchRepository = searchRepository_1.default;
var install_1 = require("./install");
exports.install = install_1.default;
var uninstall_1 = require("./uninstall");
exports.uninstall = uninstall_1.default;
var list_1 = require("./list");
exports.list = list_1.default;
var load_1 = require("./load");
exports.load = load_1.default;
var loadAll_1 = require("./loadAll");
exports.loadAll = loadAll_1.default;
var npm = {
    searchRepository: searchRepository_1.default,
    install: install_1.default,
    uninstall: uninstall_1.default,
    list: list_1.default,
    load: load_1.default,
    loadAll: loadAll_1.default,
};
exports.default = npm;
//# sourceMappingURL=index.js.map