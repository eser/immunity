"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var maester_1 = require("./maester");
exports.Maester = maester_1.default;
var consoleLogger_1 = require("./logging/loggers/consoleLogger");
var nodeConsoleFormatter_1 = require("./logging/formatters/nodeConsoleFormatter");
var maester = new maester_1.default();
exports.default = maester;
maester.logging.addLogger('default', new consoleLogger_1.default(new nodeConsoleFormatter_1.default()));
//# sourceMappingURL=index.js.map