import appendToObject from '../appendToObject';

test('appendToObject', () => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { c: 3 };

    const result = appendToObject(obj1, obj2);

    expect(result).not.toBe(obj1);
    expect(result).not.toBe(obj2);
    expect(result).toEqual({ a: 1, b: 2, c: 3 });
});
