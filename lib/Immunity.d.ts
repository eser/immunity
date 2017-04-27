export declare class Immunity {
    copy(instance: Object): Object;
    appendToArray(instance: any[], ...values: any[]): any[];
    prependToArray(instance: any[], ...values: any[]): any[];
    appendToObject(instance: Object, ...values: Object[]): Object;
    prependToObject(instance: Object, ...values: Object[]): Object;
    pickFromArray(instance: any[], items: any[]): {
        items: any[];
        remainder: any[];
    };
    pickFromObject(instance: any, items: any): {
        items: {};
        remainder: {};
    };
    splitArray(instance: any[], n: number): {
        items: any[];
        remainder: any[];
    };
    splitObject(instance: Object, n: number): {
        items: Object;
        remainder: Object;
    };
    takeFromArray(instance: any[], n: number): any[];
    takeFromObject(instance: Object, n: number): Object;
    dropFromArray(instance: any[], n: number): any[];
    dropFromObject(instance: Object, n: number): Object;
    filterArray(instance: any[], predicate: any): any[];
    filterObject(instance: Object, predicate: any): Object;
    removeFromArray(instance: any[], ...values: any[]): any[];
    removeKeyFromObject(instance: Object, ...keys: string[]): Object;
    removeValueFromObject(instance: Object, ...values: any[]): Object;
    mergeArrays(...arrays: any[][]): any[];
    mergeObjects(...objects: Object[]): Object;
}
export default Immunity;
