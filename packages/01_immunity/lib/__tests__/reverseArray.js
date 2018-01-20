"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const reverseArray_1 = require("../reverseArray");
test('reverseArray', () => {
    const arr1 = [1, 2, 3, 4, 5];
    const result = reverseArray_1.default(arr1);
    expect(result).not.toBe(arr1);
    expect(result).toHaveLength(5);
    expect(result).toEqual([5, 4, 3, 2, 1]);
});
test('reverseArray with generator', () => {
    const gen1 = function* () {
        yield 1;
        yield 2;
        yield 3;
        yield 4;
        yield 5;
    };
    const result = reverseArray_1.default(gen1());
    expect(result).toHaveLength(5);
    expect(result).toEqual([5, 4, 3, 2, 1]);
});
//# sourceMappingURL=reverseArray.js.map