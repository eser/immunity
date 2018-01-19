"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const removeValueFromObject_1 = require("../removeValueFromObject");
test('removeValueFromObject', () => {
    const arr1 = { a: 1, b: 2, c: 3, d: 4, e: 5 };
    const val1 = 2;
    const val2 = 3;
    const result = removeValueFromObject_1.default(arr1, val1, val2);
    expect(result).not.toBe(arr1);
    expect(Object.keys(result)).toHaveLength(3);
    expect(result).toEqual({ a: 1, d: 4, e: 5 });
});
//# sourceMappingURL=removeValueFromObject.js.map