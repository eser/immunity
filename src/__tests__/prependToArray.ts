import prependToArray from '../prependToArray';

describe('prependToArray', () => {
    test('basic', () => {
        const arr1 = [ 'b', 'c' ];
        const val1 = 'a';

        const result = prependToArray(arr1, val1);

        expect(result).not.toBe(arr1);
        expect(result).toEqual([ 'a', 'b', 'c' ]);
    });

    test('with generator', () => {
        const gen1 = function* gen() {
            yield 'b';
            yield 'c';
        };

        const val1 = 'a';

        const result = prependToArray(gen1(), val1);

        expect(result).toEqual([ 'a', 'b', 'c' ]);
    });
});
