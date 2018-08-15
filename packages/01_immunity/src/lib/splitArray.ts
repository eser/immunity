function splitArray(instance: Iterable<any>, n: number): { items: Array<any>, rest: Array<any> } {
    const arrInstance = (instance.constructor === Array) ?
        <Array<any>>instance :
        [ ...instance ];

    // take n items
    return {
        items: arrInstance.slice(0, n),
        rest: arrInstance.slice(n),
    };
}

export {
    splitArray as default,
};
