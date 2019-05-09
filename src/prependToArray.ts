function prependToArray(instance: Iterable<any>, ...values: Array<any>): Array<any> {
    return [
        ...values,
        ...instance,
    ];
}

export {
    prependToArray as default,
};
