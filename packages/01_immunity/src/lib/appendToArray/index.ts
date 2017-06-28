export function appendToArray(instance: any[], ...values: any[]): any[] {
    return [
        ...instance,
        ...values
    ];
}

export default appendToArray;
