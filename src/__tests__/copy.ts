import copy from '../copy';

class dummy {
    prop;

    constructor(prop) {
        this.prop = prop;
    }
}

describe('copy', () => {
    test('basic', () => {
        const obj1 = new dummy({ value: 5 });

        const result = copy(obj1);

        expect(result).not.toBe(obj1);
        expect(result).toBeInstanceOf(dummy);
        expect(result).toEqual({ prop: { value: 5 } });
    });
});
