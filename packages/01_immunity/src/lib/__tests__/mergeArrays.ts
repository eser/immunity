import mergeArrays from '../mergeArrays';

test('mergeArrays', () => {
    const arr1 = [ 1, 2, 3 ];
    const arr2 = [ 4, 5 ];

    const result = mergeArrays(arr1, arr2);

    expect(result).not.toBe(arr1);
    expect(result).not.toBe(arr2);
    expect(result).toHaveLength(5);
    expect(result).toEqual([ 1, 2, 3, 4, 5 ]);
});
