"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Maester_1 = require("./Maester");
exports.Maester = Maester_1.default;
const maester = new Maester_1.default();
exports.default = maester;
maester.logging.addLogger('default', 'console', 'nodeConsole');
//# sourceMappingURL=index.js.map