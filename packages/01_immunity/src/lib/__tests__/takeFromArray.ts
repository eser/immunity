import takeFromArray from '../takeFromArray';

test('takeFromArray', () => {
    const arr1 = [ 'a', 'b', 'c' ];
    const int1 = 2;

    const result = takeFromArray(arr1, int1);

    expect(result).not.toBe(arr1);
    expect(result).toHaveLength(2);
    expect(result).toEqual([ 'a', 'b' ]);
});
