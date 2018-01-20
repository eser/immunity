"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const splitArray_1 = require("../splitArray");
test('splitArray', () => {
    const arr1 = [1, 2, 3, 4, 5];
    const val1 = 3;
    const result = splitArray_1.default(arr1, val1);
    expect(result.items).not.toBe(arr1);
    expect(result.items).toHaveLength(3);
    expect(result.items).toEqual([1, 2, 3]);
    expect(result.rest).not.toBe(arr1);
    expect(result.rest).toHaveLength(2);
    expect(result.rest).toEqual([4, 5]);
});
test('splitArray with generator', () => {
    const gen1 = function* () {
        yield 1;
        yield 2;
        yield 3;
        yield 4;
        yield 5;
    };
    const val1 = 3;
    const result = splitArray_1.default(gen1(), val1);
    expect(result.items).toHaveLength(3);
    expect(result.items).toEqual([1, 2, 3]);
    expect(result.rest).toHaveLength(2);
    expect(result.rest).toEqual([4, 5]);
});
//# sourceMappingURL=splitArray.js.map