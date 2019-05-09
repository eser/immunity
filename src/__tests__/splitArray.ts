import splitArray from '../splitArray';

describe('splitArray', () => {
    test('basic', () => {
        const arr1 = [ 1, 2, 3, 4, 5 ];
        const val1 = 3;

        const result = splitArray(arr1, val1);

        expect(result.items).not.toBe(arr1);
        expect(result.items).toHaveLength(3);
        expect(result.items).toEqual([ 1, 2, 3 ]);

        expect(result.rest).not.toBe(arr1);
        expect(result.rest).toHaveLength(2);
        expect(result.rest).toEqual([ 4, 5 ]);
    });

    test('with generator', () => {
        const gen1 = function* gen() {
            yield 1;
            yield 2;
            yield 3;
            yield 4;
            yield 5;
        };

        const val1 = 3;

        const result = splitArray(gen1(), val1);

        expect(result.items).toHaveLength(3);
        expect(result.items).toEqual([ 1, 2, 3 ]);

        expect(result.rest).toHaveLength(2);
        expect(result.rest).toEqual([ 4, 5 ]);
    });
});
