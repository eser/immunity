import reverseArray from '../reverseArray';

describe('reverseArray', () => {
    test('basic', () => {
        const arr1 = [ 1, 2, 3, 4, 5 ];

        const result = reverseArray(arr1);

        expect(result).not.toBe(arr1);
        expect(result).toHaveLength(5);
        expect(result).toEqual([ 5, 4, 3, 2, 1 ]);
    });

    test('with generator', () => {
        const gen1 = function* gen() {
            yield 1;
            yield 2;
            yield 3;
            yield 4;
            yield 5;
        };

        const result = reverseArray(gen1());

        expect(result).toHaveLength(5);
        expect(result).toEqual([ 5, 4, 3, 2, 1 ]);
    });
});
