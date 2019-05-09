import dropFromArray from '../dropFromArray';

describe('dropFromArray', () => {
    test('basic', () => {
        const arr1 = [ 'a', 'b', 'c' ];
        const int1 = 1;

        const result = dropFromArray(arr1, int1);

        expect(result).not.toBe(arr1);
        expect(result).toHaveLength(2);
        expect(result).toEqual([ 'b', 'c' ]);
    });

    test('with generator', () => {
        const gen1 = function* gen() {
            yield 'a';
            yield 'b';
            yield 'c';
        };

        const int1 = 1;

        const result = dropFromArray(gen1(), int1);

        expect(result).toHaveLength(2);
        expect(result).toEqual([ 'b', 'c' ]);
    });
});
