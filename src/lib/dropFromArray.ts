function dropFromArray(instance: Iterable<any>, n: number): Array<any> {
    const arrInstance = (instance.constructor === Array) ?
        <Array<any>>instance :
        [ ...instance ];

    return arrInstance.slice(n);
}

export {
    dropFromArray as default,
};
