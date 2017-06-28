export function dropFromArray(instance: any[], n: number): any[] {
    return instance.slice(instance.length - n);
}

export default dropFromArray;
