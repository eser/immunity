"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prependToObject_1 = require("../prependToObject");
test('prependToObject', () => {
    const obj1 = { b: 2, c: 3 };
    const obj2 = { a: 1 };
    const result = prependToObject_1.default(obj1, obj2);
    expect(result).not.toBe(obj1);
    expect(result).not.toBe(obj2);
    expect(result).toEqual({ a: 1, b: 2, c: 3 });
});
//# sourceMappingURL=prependToObject.js.map