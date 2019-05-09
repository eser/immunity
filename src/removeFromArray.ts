function removeFromArray(instance: Iterable<any>, ...values: Array<any>): Array<any> {
    const arrInstance = (instance.constructor === Array) ?
        <Array<any>>instance :
        [ ...instance ];

    return arrInstance.filter(
        item => values.indexOf(item) === -1,
    );
}

export {
    removeFromArray as default,
};
