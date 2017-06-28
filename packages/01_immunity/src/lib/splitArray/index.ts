export function splitArray(instance: any[], n: number): { items: any[], remainder: any[] } {
    const offset = (n >= 0) ? n : instance.length + n;

    return {
        items: instance.slice(0, offset),
        remainder: instance.slice(offset)
    };
}

export default splitArray;
