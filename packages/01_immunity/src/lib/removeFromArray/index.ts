export function removeFromArray(instance: any[], ...values: any[]): any[] {
    return instance.filter(
        (item) => values.indexOf(item) === -1
    );
}

export default removeFromArray;
