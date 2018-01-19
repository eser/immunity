"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const takeFromObject_1 = require("../takeFromObject");
test('takeFromObject', () => {
    const obj1 = { a: 1, b: 2, c: 3 };
    const int1 = 2;
    const result = takeFromObject_1.default(obj1, int1);
    expect(result).not.toBe(obj1);
    expect(Object.keys(result)).toHaveLength(2);
    expect(result).toEqual({ a: 1, b: 2 });
});
//# sourceMappingURL=takeFromObject.js.map