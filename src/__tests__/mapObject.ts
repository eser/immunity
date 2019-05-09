import mapObject from '../mapObject';

describe('mapObject', () => {
    test('basic', () => {
        const obj1 = { a: 1, b: 2, c: 3, d: 4, e: 5 };
        const func1 = (value, key) => ({ [key]: value - 1 });

        const result = mapObject(obj1, func1);

        expect(result).not.toBe(obj1);
        expect(Object.keys(result)).toHaveLength(5);
        expect(result).toEqual({ a: 0, b: 1, c: 2, d: 3, e: 4 });
    });

    test('with value skipping', () => {
        const obj1 = { a: 1, b: 2, c: null };
        const func1 = function func(value, key) {
            if (value === null) {
                return null;
            }

            return { [key]: value - 1 };
        };

        const result = mapObject(obj1, func1);

        expect(result).not.toBe(obj1);
        expect(Object.keys(result)).toHaveLength(2);
        expect(result).toEqual({ a: 0, b: 1 });
    });
});
