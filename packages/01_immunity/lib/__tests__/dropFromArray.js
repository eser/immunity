"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dropFromArray_1 = require("../dropFromArray");
test('dropFromArray', () => {
    const arr1 = ['a', 'b', 'c'];
    const int1 = 1;
    const result = dropFromArray_1.default(arr1, int1);
    expect(result).not.toBe(arr1);
    expect(result).toHaveLength(2);
    expect(result).toEqual(['b', 'c']);
});
test('dropFromArray with generator', () => {
    const gen1 = function* () {
        yield 'a';
        yield 'b';
        yield 'c';
    };
    const int1 = 1;
    const result = dropFromArray_1.default(gen1(), int1);
    expect(result).toHaveLength(2);
    expect(result).toEqual(['b', 'c']);
});
//# sourceMappingURL=dropFromArray.js.map