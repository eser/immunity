"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const iterate_1 = require("evangelist/lib/iterate");
const fromNodeStream_1 = require("./fromNodeStream");
const fs = require("fs");
iterate_1.default(fromNodeStream_1.default(fs.createReadStream('./README.md')), item => {
    console.log(item.data.toString('utf8'));
});
//# sourceMappingURL=test.js.map