function reverseArray(instance: Iterable<any>): Array<any> {
    const arrInstance = (instance.constructor === Array) ?
        <Array<any>>instance :
        [ ...instance ];

    return arrInstance.reduce(
        (obj, itemValue) => ([ itemValue, ...obj ]),
        [],
    );
}

export {
    reverseArray as default,
};
