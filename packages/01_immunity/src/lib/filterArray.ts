export function filterArray(instance: Array<any>, predicate: (value: any, index?: number, array?: Array<any>) => any): Array<any> {
    return instance.filter(predicate);
};

export default filterArray;
