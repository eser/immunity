function filterArray(
    instance: Iterable<any>,
    predicate: (value: any, index?: number, instance?: Iterable<any>) => any): Array<any> {
    const arrInstance = (instance.constructor === Array) ?
        <Array<any>>instance :
        [ ...instance ];

    return arrInstance.filter(predicate);
}

export {
    filterArray as default,
};
