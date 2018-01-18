"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dropFromArray_1 = require("../dropFromArray");
test('dropFromArray', () => {
    const arr1 = ['a', 'b', 'c'];
    const int1 = 1;
    const result = dropFromArray_1.default(arr1, int1);
    expect(result).not.toBe(arr1);
    expect(result).toHaveLength(int1);
    expect(result).toEqual(['c']);
});
//# sourceMappingURL=dropFromArray.js.map