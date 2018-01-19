import pipe from '../pipe';

test('pipe', () => {
    const lower = x => x.toLowerCase();
    const chars = x => x.replace(/[^\w \-]+/g, '');
    const spaces = x => x.split(' ');
    const dashes = x => x.join('-');

    const slug = pipe(lower, chars, spaces, dashes);

    const result = slug('Hello World!');

    expect(result).toEqual('hello-world');
});
