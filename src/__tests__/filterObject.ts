import filterObject from '../filterObject';

describe('filterObject', () => {
    test('basic', () => {
        const obj1 = { a: 1, b: 2, c: 3, d: 4, e: 5 };
        const func1 = x => x <= 3;

        const result = filterObject(obj1, func1);

        expect(result).not.toBe(obj1);
        expect(Object.keys(result)).toHaveLength(3);
        expect(result).toEqual({ a: 1, b: 2, c: 3 });
    });
});
