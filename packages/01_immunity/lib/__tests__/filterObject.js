"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var filterObject_1 = require("../filterObject");
test('filterObject', function () {
    var obj1 = { a: 1, b: 2, c: 3, d: 4, e: 5 };
    var func1 = function (x) { return x <= 3; };
    var result = filterObject_1.default(obj1, func1);
    expect(result).not.toBe(obj1);
    expect(Object.keys(result)).toHaveLength(3);
    expect(result).toEqual({ a: 1, b: 2, c: 3 });
});
//# sourceMappingURL=filterObject.js.map