function takeFromArray(instance: Array<any>, n: number): Array<any> {
    return instance.slice(0, n);
}

export {
    takeFromArray as default,
};
