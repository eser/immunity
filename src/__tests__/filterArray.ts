import filterArray from '../filterArray';

describe('filterArray', () => {
    test('basic', () => {
        const arr1 = [ 1, 2, 3, 4, 5 ];
        const func1 = x => x <= 3;

        const result = filterArray(arr1, func1);

        expect(result).not.toBe(arr1);
        expect(result).toHaveLength(3);
        expect(result).toEqual([ 1, 2, 3 ]);
    });

    test('with generator', () => {
        const gen1 = function* gen() {
            yield 1;
            yield 2;
            yield 3;
            yield 4;
            yield 5;
        };

        const func1 = x => x <= 3;

        const result = filterArray(gen1(), func1);

        expect(result).toHaveLength(3);
        expect(result).toEqual([ 1, 2, 3 ]);
    });
});
