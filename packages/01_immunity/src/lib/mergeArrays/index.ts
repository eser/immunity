export function mergeArrays(...arrays: any[][]): any[] {
    return arrays.reduce(
        (obj, array) => [...obj, ...array],
        []
    );
}

export default mergeArrays;
