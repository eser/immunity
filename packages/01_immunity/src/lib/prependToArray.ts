function prependToArray(instance: Array<any>, ...values: Array<any>): Array<any> {
    return [
        ...values,
        ...instance,
    ];
};

export {
    prependToArray as default,
};
