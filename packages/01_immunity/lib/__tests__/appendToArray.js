"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const appendToArray_1 = require("../appendToArray");
test('appendToArray', () => {
    const arr1 = ['a', 'b'];
    const val1 = 'c';
    const result = appendToArray_1.default(arr1, val1);
    expect(result).not.toBe(arr1);
    expect(result).toEqual(['a', 'b', 'c']);
});
//# sourceMappingURL=appendToArray.js.map