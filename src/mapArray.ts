function mapArray(
    instance: Iterable<any>,
    predicate: (value: any, index?: number, instance?: Iterable<any>) => any): Array<any> {
    const arrInstance = (instance.constructor === Array) ?
        <Array<any>>instance :
        [ ...instance ];

    return arrInstance.map(predicate);
}

export {
    mapArray as default,
};
