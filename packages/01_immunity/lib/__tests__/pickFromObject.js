"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pickFromObject_1 = require("../pickFromObject");
test('pickFromObject', () => {
    const obj1 = { a: 1, b: 2, c: 3, d: 4, e: 5 };
    const arr1 = ['b', 'c', 'f'];
    const result = pickFromObject_1.default(obj1, arr1);
    expect(result.items).not.toBe(obj1);
    expect(Object.keys(result.items)).toHaveLength(2);
    expect(result.items).toEqual({ b: 2, c: 3 });
    expect(result.rest).not.toBe(obj1);
    expect(Object.keys(result.rest)).toHaveLength(3);
    expect(result.rest).toEqual({ a: 1, d: 4, e: 5 });
});
//# sourceMappingURL=pickFromObject.js.map