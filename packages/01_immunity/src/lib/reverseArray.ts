function reverseArray(instance: Array<any>): Array<any> {
    return instance.reduce(
        (obj, itemValue, itemKey) => {
            return [ itemValue, ...obj ];
        },
        [],
    );
}

export {
    reverseArray as default,
};
