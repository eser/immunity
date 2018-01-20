"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prependToArray_1 = require("../prependToArray");
test('prependToArray', () => {
    const arr1 = ['b', 'c'];
    const val1 = 'a';
    const result = prependToArray_1.default(arr1, val1);
    expect(result).not.toBe(arr1);
    expect(result).toEqual(['a', 'b', 'c']);
});
test('prependToArray with generator', () => {
    const gen1 = function* () {
        yield 'b';
        yield 'c';
    };
    const val1 = 'a';
    const result = prependToArray_1.default(gen1(), val1);
    expect(result).toEqual(['a', 'b', 'c']);
});
//# sourceMappingURL=prependToArray.js.map