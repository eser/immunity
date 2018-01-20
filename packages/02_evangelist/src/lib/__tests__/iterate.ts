import iterate from '../iterate';

test('iterate', async () => {
    const gen1 = function* () {
        yield 1;
        yield 2;
        yield 3;
    };

    let total = 0;

    const func1 = function (x) {
        total += x;
    };

    const result = await iterate(gen1(), func1);

    expect(total).toEqual(6);
});

test('iterate async', async () => {
    const delay = (ms: number, value: any): Promise<number> => new Promise((resolve, reject) => {
        setTimeout(
            () => resolve(value),
            ms,
        );
    });

    const gen1 = function* () {
        yield 1;
        yield 2;
        yield 3;
    };

    let total = 0;

    const func1 = async function (x) {
        total += await delay(10, x);
    };

    const result = await iterate(gen1(), func1);

    expect(total).toEqual(6);
});
