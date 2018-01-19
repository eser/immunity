"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mergeObjects_1 = require("../mergeObjects");
test('mergeObjects', () => {
    const obj1 = { a: 1, b: 2, c: 3 };
    const obj2 = { d: 4, e: 5 };
    const result = mergeObjects_1.default(obj1, obj2);
    expect(result).not.toBe(obj1);
    expect(result).not.toBe(obj2);
    expect(Object.keys(result)).toHaveLength(5);
    expect(result).toEqual({ a: 1, b: 2, c: 3, d: 4, e: 5 });
});
//# sourceMappingURL=mergeObjects.js.map