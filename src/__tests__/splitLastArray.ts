import splitLastArray from '../splitLastArray';

describe('splitLastArray', () => {
    test('basic', () => {
        const arr1 = [ 1, 2, 3, 4, 5 ];
        const val1 = 2;

        const result = splitLastArray(arr1, val1);

        expect(result.items).not.toBe(arr1);
        expect(result.items).toHaveLength(2);
        expect(result.items).toEqual([ 4, 5 ]);

        expect(result.rest).not.toBe(arr1);
        expect(result.rest).toHaveLength(3);
        expect(result.rest).toEqual([ 1, 2, 3 ]);
    });

    test('with generator', () => {
        const gen1 = function* gen() {
            yield 1;
            yield 2;
            yield 3;
            yield 4;
            yield 5;
        };

        const val1 = 2;

        const result = splitLastArray(gen1(), val1);

        expect(result.items).toHaveLength(2);
        expect(result.items).toEqual([ 4, 5 ]);

        expect(result.rest).toHaveLength(3);
        expect(result.rest).toEqual([ 1, 2, 3 ]);
    });
});
