"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var splitObject_1 = require("../splitObject");
test('splitObject', function () {
    var obj1 = { a: 1, b: 2, c: 3, d: 4, e: 5 };
    var val1 = 3;
    var result = splitObject_1.default(obj1, val1);
    expect(result.items).not.toBe(obj1);
    expect(Object.keys(result.items)).toHaveLength(3);
    expect(result.items).toEqual({ a: 1, b: 2, c: 3 });
    expect(result.rest).not.toBe(obj1);
    expect(Object.keys(result.rest)).toHaveLength(2);
    expect(result.rest).toEqual({ d: 4, e: 5 });
});
test('splitObject with negative', function () {
    var obj1 = { a: 1, b: 2, c: 3, d: 4, e: 5 };
    var val1 = -3;
    var result = splitObject_1.default(obj1, val1);
    expect(result.items).not.toBe(obj1);
    expect(Object.keys(result.items)).toHaveLength(2);
    expect(result.items).toEqual({ a: 1, b: 2 });
    expect(result.rest).not.toBe(obj1);
    expect(Object.keys(result.rest)).toHaveLength(3);
    expect(result.rest).toEqual({ c: 3, d: 4, e: 5 });
});
//# sourceMappingURL=splitObject.js.map