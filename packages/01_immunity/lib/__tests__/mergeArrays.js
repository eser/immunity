"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mergeArrays_1 = require("../mergeArrays");
test('mergeArrays', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [4, 5];
    const result = mergeArrays_1.default(arr1, arr2);
    expect(result).not.toBe(arr1);
    expect(result).not.toBe(arr2);
    expect(result).toHaveLength(5);
    expect(result).toEqual([1, 2, 3, 4, 5]);
});
//# sourceMappingURL=mergeArrays.js.map