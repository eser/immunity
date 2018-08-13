"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mapObject_1 = require("immunity/lib/mapObject");
var curryRight_1 = require("evangelist/lib/curryRight");
var index_1 = require("./npm/index");
function Senior(strategy, options) {
    var selected = null;
    if (strategy === 'npm') {
        selected = index_1.default;
    }
    if (selected !== null) {
        return mapObject_1.default(selected, function (value, key) {
            var _a;
            return _a = {}, _a[key] = curryRight_1.default(value, options), _a;
        });
    }
    return selected;
}
exports.default = Senior;
//# sourceMappingURL=index.js.map