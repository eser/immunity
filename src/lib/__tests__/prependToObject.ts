import prependToObject from '../prependToObject';

describe('prependToObject', () => {
    test('basic', () => {
        const obj1 = { b: 2, c: 3 };
        const obj2 = { a: 1 };

        const result = prependToObject(obj1, obj2);

        expect(result).not.toBe(obj1);
        expect(result).not.toBe(obj2);
        expect(result).toEqual({ a: 1, b: 2, c: 3 });
    });
});
