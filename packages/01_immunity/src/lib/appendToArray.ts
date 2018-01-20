function appendToArray(instance: Iterable<any>, ...values: Array<any>): Array<any> {
    return [
        ...instance,
        ...values,
    ];
}

export {
    appendToArray as default,
};
