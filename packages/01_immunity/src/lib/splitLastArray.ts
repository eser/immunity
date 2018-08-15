function splitLastArray(instance: Iterable<any>, n: number): { items: Array<any>, rest: Array<any> } {
    const arrInstance = (instance.constructor === Array) ?
        <Array<any>>instance :
        [ ...instance ];

    const offset = arrInstance.length - n;

    // take last n items
    return {
        items: arrInstance.slice(offset),
        rest: arrInstance.slice(0, offset),
    };
}

export {
    splitLastArray as default,
};
