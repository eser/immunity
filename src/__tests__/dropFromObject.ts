import dropFromObject from '../dropFromObject';

describe('dropFromObject', () => {
    test('basic', () => {
        const obj1 = { a: 1, b: 2, c: 3 };
        const int1 = 1;

        const result = dropFromObject(obj1, int1);

        expect(result).not.toBe(obj1);
        expect(Object.keys(result)).toHaveLength(2);
        expect(result).toEqual({ b: 2, c: 3 });
    });
});
