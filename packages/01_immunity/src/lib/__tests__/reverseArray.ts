import reverseArray from '../reverseArray';

test('reverseArray', () => {
    const arr1 = [ 1, 2, 3, 4, 5 ];

    const result = reverseArray(arr1);

    expect(result).not.toBe(arr1);
    expect(result).toHaveLength(5);
    expect(result).toEqual([ 5, 4, 3, 2, 1 ]);
});
