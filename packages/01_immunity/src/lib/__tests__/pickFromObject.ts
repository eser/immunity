import pickFromObject from '../pickFromObject';

test('pickFromObject', () => {
    const obj1 = { a: 1, b: 2, c: 3, d: 4, e: 5 };
    const arr1 = [ 'b', 'c', 'f' ];

    const result = pickFromObject(obj1, arr1);

    expect(result.items).not.toBe(obj1);
    expect(Object.keys(result.items)).toHaveLength(2);
    expect(result.items).toEqual({ b: 2, c: 3 });

    expect(result.remainder).not.toBe(obj1);
    expect(Object.keys(result.remainder)).toHaveLength(3);
    expect(result.remainder).toEqual({ a: 1, d: 4, e: 5 });
});
