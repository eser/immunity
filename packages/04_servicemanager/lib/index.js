"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const serviceLifetime_1 = require("./serviceLifetime");
exports.ServiceLifetime = serviceLifetime_1.default;
const serviceManager_1 = require("./serviceManager");
exports.ServiceManager = serviceManager_1.default;
const services = new serviceManager_1.default();
exports.default = services;
//# sourceMappingURL=index.js.map