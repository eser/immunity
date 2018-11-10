import removeFirstMatchFromObject from '../removeFirstMatchFromObject';

describe('removeFirstMatchFromObject', () => {
    test('basic', () => {
        const obj1 = { a: 1, f: 5, b: 2, c: 3, d: 4, e: 5 };
        const func1 = x => x === 5;

        const result = removeFirstMatchFromObject(obj1, func1);

        expect(result).not.toBe(obj1);
        expect(Object.keys(result)).toHaveLength(5);
        expect(result).toEqual({ a: 1, b: 2, c: 3, d: 4, e: 5 });
    });
});
