"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const removeFirstMatchFromArray_1 = require("../removeFirstMatchFromArray");
test('removeFirstMatchFromArray', () => {
    const arr1 = [1, 5, 2, 3, 4, 5];
    const func1 = x => x === 5;
    const result = removeFirstMatchFromArray_1.default(arr1, func1);
    expect(result).not.toBe(arr1);
    expect(result).toHaveLength(5);
    expect(result).toEqual([1, 2, 3, 4, 5]);
});
test('removeFirstMatchFromArray with generator', () => {
    const gen1 = function* () {
        yield 1;
        yield 5;
        yield 2;
        yield 3;
        yield 4;
        yield 5;
    };
    const func1 = x => x === 5;
    const result = removeFirstMatchFromArray_1.default(gen1(), func1);
    expect(result).toHaveLength(5);
    expect(result).toEqual([1, 2, 3, 4, 5]);
});
//# sourceMappingURL=removeFirstMatchFromArray.js.map