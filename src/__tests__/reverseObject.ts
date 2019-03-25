import reverseObject from '../reverseObject';

describe('reverseObject', () => {
    test('basic', () => {
        const obj1 = { a: 1, b: 2, c: 3, d: 4, e: 5 };

        const result = reverseObject(obj1);

        expect(result).not.toBe(obj1);
        expect(Object.keys(result)).toHaveLength(5);
        expect(result).toEqual({ e: 5, d: 4, c: 3, b: 2, a: 1 });
    });
});
