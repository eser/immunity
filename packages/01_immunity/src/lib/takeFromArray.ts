function takeFromArray(instance: Iterable<any>, n: number): Array<any> {
    const arrInstance = (instance.constructor === Array) ?
        <Array<any>>instance :
        [ ...instance ];

    return arrInstance.slice(0, n);
}

export {
    takeFromArray as default,
};
