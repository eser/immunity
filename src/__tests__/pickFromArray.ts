import pickFromArray from '../pickFromArray';

describe('pickFromArray', () => {
    test('basic', () => {
        const arr1 = [ 1, 2, 3, 4, 5 ];
        const arr2 = [ 2, 3, 6 ];

        const result = pickFromArray(arr1, arr2);

        expect(result.items).not.toBe(arr1);
        expect(result.items).not.toBe(arr2);
        expect(result.items).toHaveLength(2);
        expect(result.items).toEqual([ 2, 3 ]);

        expect(result.rest).not.toBe(arr1);
        expect(result.rest).not.toBe(arr2);
        expect(result.rest).toHaveLength(3);
        expect(result.rest).toEqual([ 1, 4, 5 ]);
    });

    test('with generator #1', () => {
        const gen1 = function* gen() {
            yield 1;
            yield 2;
            yield 3;
            yield 4;
            yield 5;
        };

        const arr1 = [ 2, 3, 6 ];

        const result = pickFromArray(gen1(), arr1);

        expect(result.items).not.toBe(arr1);
        expect(result.items).toHaveLength(2);
        expect(result.items).toEqual([ 2, 3 ]);

        expect(result.rest).not.toBe(arr1);
        expect(result.rest).toHaveLength(3);
        expect(result.rest).toEqual([ 1, 4, 5 ]);
    });

    test('with generator #2', () => {
        const arr1 = [ 1, 2, 3, 4, 5 ];
        const gen1 = function* gen() {
            yield 2;
            yield 3;
            yield 6;
        };

        const result = pickFromArray(arr1, gen1());

        expect(result.items).not.toBe(arr1);
        expect(result.items).toHaveLength(2);
        expect(result.items).toEqual([ 2, 3 ]);

        expect(result.rest).not.toBe(arr1);
        expect(result.rest).toHaveLength(3);
        expect(result.rest).toEqual([ 1, 4, 5 ]);
    });
});
