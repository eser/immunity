function splitArray(instance: Array<any>, n: number): { items: Array<any>, rest: Array<any> } {
    const offset = (n >= 0) ? n : instance.length + n;

    return {
        items: instance.slice(0, offset),
        rest: instance.slice(offset),
    };
}

export {
    splitArray as default,
};
