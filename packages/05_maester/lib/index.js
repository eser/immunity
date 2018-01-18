"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const maester_1 = require("./maester");
exports.Maester = maester_1.default;
const consoleLogger_1 = require("./logging/loggers/consoleLogger");
const nodeConsoleFormatter_1 = require("./logging/formatters/nodeConsoleFormatter");
const maester = new maester_1.default();
exports.default = maester;
maester.logging.addLogger('default', new consoleLogger_1.default(new nodeConsoleFormatter_1.default()));
//# sourceMappingURL=index.js.map