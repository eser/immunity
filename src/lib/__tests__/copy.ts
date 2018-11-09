import copy from '../copy';

class dummy {}

test('copy', () => {
    const obj1 = new dummy();

    const result = copy(obj1);

    expect(result).not.toBe(obj1);
    expect(result).toBeInstanceOf(dummy);
    expect(result).toEqual({});
});
