import dropFromObject from '../dropFromObject';

test('dropFromObject', () => {
    const obj1 = { a: 1, b: 2, c: 3 };
    const int1 = 1;

    const result = dropFromObject(obj1, int1);

    expect(result).not.toBe(obj1);
    expect(Object.keys(result)).toHaveLength(int1);
    expect(result).toEqual({ c: 3 });
});
