import splitLastObject from '../splitLastObject';

describe('splitLastObject', () => {
    test('basic', () => {
        const obj1 = { a: 1, b: 2, c: 3, d: 4, e: 5 };
        const val1 = 2;

        const result = splitLastObject(obj1, val1);

        expect(result.items).not.toBe(obj1);
        expect(Object.keys(result.items)).toHaveLength(2);
        expect(result.items).toEqual({ d: 4, e: 5 });

        expect(result.rest).not.toBe(obj1);
        expect(Object.keys(result.rest)).toHaveLength(3);
        expect(result.rest).toEqual({ a: 1, b: 2, c: 3 });
    });
});
