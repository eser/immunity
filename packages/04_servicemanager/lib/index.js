"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var serviceLifetime_1 = require("./serviceLifetime");
exports.ServiceLifetime = serviceLifetime_1.default;
var serviceManager_1 = require("./serviceManager");
exports.ServiceManager = serviceManager_1.default;
var services = new serviceManager_1.default();
exports.default = services;
//# sourceMappingURL=index.js.map