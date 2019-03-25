import splitObject from '../splitObject';

describe('splitObject', () => {
    test('basic', () => {
        const obj1 = { a: 1, b: 2, c: 3, d: 4, e: 5 };
        const val1 = 3;

        const result = splitObject(obj1, val1);

        expect(result.items).not.toBe(obj1);
        expect(Object.keys(result.items)).toHaveLength(3);
        expect(result.items).toEqual({ a: 1, b: 2, c: 3 });

        expect(result.rest).not.toBe(obj1);
        expect(Object.keys(result.rest)).toHaveLength(2);
        expect(result.rest).toEqual({ d: 4, e: 5 });
    });
});
