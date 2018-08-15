"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
var pluginManager = index_1.default('npm', { homePath: './testing' });
pluginManager.list()
    .then(function (x) { return console.log(x); });
pluginManager.listModuleIndexes()
    .then(function (x) { return console.log(x); });
//# sourceMappingURL=test.js.map