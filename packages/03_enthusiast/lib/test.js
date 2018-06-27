"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var compose_1 = require("evangelist/lib/compose");
var iterate_1 = require("evangelist/lib/iterate");
var fromNodeStream_1 = require("./fromNodeStream");
var toNodeStream_1 = require("./toNodeStream");
var fs = require("fs");
iterate_1.default(fromNodeStream_1.default(fs.createReadStream('./README.md'), 512), compose_1.default(function (item) {
    var value = item.data.toString('utf8');
    console.log(value);
    return value;
}, toNodeStream_1.default(fs.createWriteStream('./README.x.md'))));
//# sourceMappingURL=test.js.map