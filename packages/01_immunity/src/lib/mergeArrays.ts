function mergeArrays(...arrays: Array<Array<any>>): Array<any> {
    return arrays.reduce(
        (obj, array) => [ ...obj, ...array ],
        []
    );
}

export {
    mergeArrays as default,
};
