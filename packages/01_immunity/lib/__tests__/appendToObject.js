"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const appendToObject_1 = require("../appendToObject");
test('appendToObject', () => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { c: 3 };
    const result = appendToObject_1.default(obj1, obj2);
    expect(result).not.toBe(obj1);
    expect(result).not.toBe(obj2);
    expect(result).toEqual({ a: 1, b: 2, c: 3 });
});
//# sourceMappingURL=appendToObject.js.map