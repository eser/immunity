function mergeArrays(...arrays: Array<Iterable<any>>): Array<any> {
    return <Array<any>>arrays.reduce(
        (obj, array) => [ ...obj, ...array ],
        [],
    );
}

export {
    mergeArrays as default,
};
