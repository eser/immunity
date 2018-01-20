async function iterate(iterable: Iterable<any>, func: (...args: Array<any>) => Promise<any> | any): Promise<void> {
    for (const value of iterable) {
        await func(value);
    }
};

export {
    iterate as default,
};
