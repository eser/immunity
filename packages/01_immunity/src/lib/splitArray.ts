function splitArray(instance: Iterable<any>, n: number): { items: Array<any>, rest: Array<any> } {
    const arrInstance = (instance.constructor === Array) ?
        <Array<any>>instance :
        [ ...instance ];

    const offset = (n >= 0) ? n : arrInstance.length + n;

    return {
        items: arrInstance.slice(0, offset),
        rest: arrInstance.slice(offset),
    };
}

export {
    splitArray as default,
};
