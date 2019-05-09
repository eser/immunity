import removeFromArray from '../removeFromArray';

describe('removeFromArray', () => {
    test('basic', () => {
        const arr1 = [ 1, 2, 3, 4, 5 ];
        const val1 = 2;
        const val2 = 3;

        const result = removeFromArray(arr1, val1, val2);

        expect(result).not.toBe(arr1);
        expect(result).toHaveLength(3);
        expect(result).toEqual([ 1, 4, 5 ]);
    });

    test('with generator', () => {
        const gen1 = function* gen() {
            yield 1;
            yield 2;
            yield 3;
            yield 4;
            yield 5;
        };

        const val1 = 2;
        const val2 = 3;

        const result = removeFromArray(gen1(), val1, val2);

        expect(result).toHaveLength(3);
        expect(result).toEqual([ 1, 4, 5 ]);
    });
});
