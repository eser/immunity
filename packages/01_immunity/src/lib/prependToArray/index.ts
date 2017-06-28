export function prependToArray(instance: any[], ...values: any[]): any[] {
    return [
        ...values,
        ...instance
    ];
}

export default prependToArray;
