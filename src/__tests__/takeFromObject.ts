import takeFromObject from '../takeFromObject';

describe('takeFromObject', () => {
    test('basic', () => {
        const obj1 = { a: 1, b: 2, c: 3 };
        const int1 = 2;

        const result = takeFromObject(obj1, int1);

        expect(result).not.toBe(obj1);
        expect(Object.keys(result)).toHaveLength(2);
        expect(result).toEqual({ a: 1, b: 2 });
    });
});
