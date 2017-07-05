export function prependToArray(instance: Array<any>, ...values: Array<any>): Array<any> {
    return [
        ...values,
        ...instance
    ];
};

export default prependToArray;
