import prependToArray from '../prependToArray';

test('prependToArray', () => {
    const arr1 = [ 'b', 'c' ];
    const val1 = 'a';

    const result = prependToArray(arr1, val1);

    expect(result).not.toBe(arr1);
    expect(result).toEqual([ 'a', 'b', 'c' ]);
});

test('prependToArray with generator', () => {
    const gen1 = function* () {
        yield 'b';
        yield 'c';
    };

    const val1 = 'a';

    const result = prependToArray(gen1(), val1);

    expect(result).toEqual([ 'a', 'b', 'c' ]);
});
