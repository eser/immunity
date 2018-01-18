import dropFromArray from '../dropFromArray';

test('dropFromArray', () => {
    const arr1 = [ 'a', 'b', 'c' ];
    const int1 = 1;

    const result = dropFromArray(arr1, int1);

    expect(result).not.toBe(arr1);
    expect(result).toHaveLength(int1);
    expect(result).toEqual([ 'c' ]);
});
