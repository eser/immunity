import copy from '../copy';

class Dummy {
    prop;

    constructor(prop) {
        this.prop = prop;
    }
}

describe('copy', () => {
    test('basic', () => {
        const obj1 = new Dummy({ value: 5 });

        const result = copy(obj1);

        expect(result).not.toBe(obj1);
        expect(result).toBeInstanceOf(Dummy);
        expect(result).toEqual({ prop: { value: 5 } });
    });
});
