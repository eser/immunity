function removeFirstMatchFromArray(
    instance: Iterable<any>,
    predicate: (value: any, index: number, instance: Iterable<any>) => any): Array<any> {
    const arrInstance = (instance.constructor === Array) ?
        <Array<any>>instance :
        [ ...instance ];

    let notFound = true;

    return arrInstance.filter((itemValue, itemKey, obj) => {
        if (notFound && predicate(itemValue, itemKey, obj)) {
            notFound = false;

            return false;
        }

        return true;
    });
}

export {
    removeFirstMatchFromArray as default,
};
