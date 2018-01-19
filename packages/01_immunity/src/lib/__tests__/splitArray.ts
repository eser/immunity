import splitArray from '../splitArray';

test('splitArray', () => {
    const arr1 = [ 1, 2, 3, 4, 5 ];
    const val1 = 3;

    const result = splitArray(arr1, val1);

    expect(result.items).not.toBe(arr1);
    expect(result.items).toHaveLength(3);
    expect(result.items).toEqual([ 1, 2, 3 ]);

    expect(result.remainder).not.toBe(arr1);
    expect(result.remainder).toHaveLength(2);
    expect(result.remainder).toEqual([ 4, 5 ]);
});
