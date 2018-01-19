import removeFirstMatchFromArray from '../removeFirstMatchFromArray';

test('removeFirstMatchFromArray', () => {
    const arr1 = [ 5, 1, 2, 3, 4, 5 ];
    const func1 = x => x === 5;

    const result = removeFirstMatchFromArray(arr1, func1);

    expect(result).not.toBe(arr1);
    expect(result).toHaveLength(5);
    expect(result).toEqual([ 1, 2, 3, 4, 5 ]);
});
