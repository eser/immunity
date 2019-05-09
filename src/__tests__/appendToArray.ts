import appendToArray from '../appendToArray';

describe('appendToArray', () => {
    test('basic', () => {
        const arr1 = [ 'a', 'b' ];
        const val1 = 'c';

        const result = appendToArray(arr1, val1);

        expect(result).not.toBe(arr1);
        expect(result).toEqual([ 'a', 'b', 'c' ]);
    });

    test('with generator', () => {
        const gen1 = function* gen() {
            yield 'a';
            yield 'b';
        };

        const val1 = 'c';

        const result = appendToArray(gen1(), val1);

        expect(result).toEqual([ 'a', 'b', 'c' ]);
    });
});
