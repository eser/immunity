"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const filterArray_1 = require("../filterArray");
test('filterArray', () => {
    const arr1 = [1, 2, 3, 4, 5];
    const func1 = x => x <= 3;
    const result = filterArray_1.default(arr1, func1);
    expect(result).not.toBe(arr1);
    expect(result).toHaveLength(3);
    expect(result).toEqual([1, 2, 3]);
});
test('filterArray with generator', () => {
    const gen1 = function* () {
        yield 1;
        yield 2;
        yield 3;
        yield 4;
        yield 5;
    };
    const func1 = x => x <= 3;
    const result = filterArray_1.default(gen1(), func1);
    expect(result).toHaveLength(3);
    expect(result).toEqual([1, 2, 3]);
});
//# sourceMappingURL=filterArray.js.map