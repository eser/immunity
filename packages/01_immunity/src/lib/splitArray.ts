export function splitArray(instance: Array<any>, n: number): { items: Array<any>, remainder: Array<any> } {
    const offset = (n >= 0) ? n : instance.length + n;

    return {
        items: instance.slice(0, offset),
        remainder: instance.slice(offset)
    };
};

export default splitArray;
