export function appendToArray(instance: Array<any>, ...values: Array<any>): Array<any> {
    return [
        ...instance,
        ...values
    ];
};

export default appendToArray;
