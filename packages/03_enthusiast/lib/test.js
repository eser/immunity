"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const compose_1 = require("evangelist/lib/compose");
const iterate_1 = require("evangelist/lib/iterate");
const fromNodeStream_1 = require("./fromNodeStream");
const toNodeStream_1 = require("./toNodeStream");
const fs = require("fs");
iterate_1.default(fromNodeStream_1.default(fs.createReadStream('./README.md'), 512), compose_1.default(item => {
    const value = item.data.toString('utf8');
    console.log(value);
    return value;
}, toNodeStream_1.default(fs.createWriteStream('./README.x.md'))));
//# sourceMappingURL=test.js.map