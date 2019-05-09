import mergeArrays from '../mergeArrays';

describe('mergeArrays', () => {
    test('basic', () => {
        const arr1 = [ 1, 2, 3 ];
        const arr2 = [ 4, 5 ];

        const result = mergeArrays(arr1, arr2);

        expect(result).not.toBe(arr1);
        expect(result).not.toBe(arr2);
        expect(result).toHaveLength(5);
        expect(result).toEqual([ 1, 2, 3, 4, 5 ]);
    });

    test('with generator #1', () => {
        const gen1 = function* gen() {
            yield 1;
            yield 2;
            yield 3;
        };

        const arr1 = [ 4, 5 ];

        const result = mergeArrays(gen1(), arr1);

        expect(result).not.toBe(arr1);
        expect(result).toHaveLength(5);
        expect(result).toEqual([ 1, 2, 3, 4, 5 ]);
    });

    test('with generator #2', () => {
        const arr1 = [ 1, 2, 3 ];
        const gen1 = function* gen() {
            yield 4;
            yield 5;
        };

        const result = mergeArrays(arr1, gen1());

        expect(result).not.toBe(arr1);
        expect(result).toHaveLength(5);
        expect(result).toEqual([ 1, 2, 3, 4, 5 ]);
    });
});
