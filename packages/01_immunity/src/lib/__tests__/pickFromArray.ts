import pickFromArray from '../pickFromArray';

test('pickFromArray', () => {
    const arr1 = [ 1, 2, 3, 4, 5 ];
    const arr2 = [ 2, 3, 6 ];

    const result = pickFromArray(arr1, arr2);

    expect(result.items).not.toBe(arr1);
    expect(result.items).not.toBe(arr2);
    expect(result.items).toHaveLength(2);
    expect(result.items).toEqual([ 2, 3 ]);

    expect(result.remainder).not.toBe(arr1);
    expect(result.remainder).not.toBe(arr2);
    expect(result.remainder).toHaveLength(3);
    expect(result.remainder).toEqual([ 1, 4, 5 ]);
});
