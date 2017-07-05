export function dropFromArray(instance: Array<any>, n: number): any[] {
    return instance.slice(instance.length - n);
};

export default dropFromArray;
