import removeKeyFromObject from '../removeKeyFromObject';

describe('removeKeyFromObject', () => {
    test('basic', () => {
        const arr1 = { a: 1, b: 2, c: 3, d: 4, e: 5 };
        const val1 = 'b';
        const val2 = 'c';

        const result = removeKeyFromObject(arr1, val1, val2);

        expect(result).not.toBe(arr1);
        expect(Object.keys(result)).toHaveLength(3);
        expect(result).toEqual({ a: 1, d: 4, e: 5 });
    });
});
