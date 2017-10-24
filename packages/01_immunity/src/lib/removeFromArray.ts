function removeFromArray(instance: Array<any>, ...values: Array<any>): Array<any> {
    return instance.filter(
        (item) => values.indexOf(item) === -1
    );
}

export {
    removeFromArray as default,
};
