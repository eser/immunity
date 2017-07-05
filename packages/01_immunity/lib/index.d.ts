declare const _default: {
    appendToArray: (instance: any[], ...values: any[]) => any[];
    appendToObject: (instance: any, ...values: {
        [key: string]: any;
    }[]) => any;
    copy: (instance: any) => any;
    dropFromArray: (instance: any[], n: number) => any[];
    dropFromObject: (instance: any, n: number) => any;
    filterArray: (instance: any[], predicate: (value: any, index?: number | undefined, array?: any[] | undefined) => any) => any[];
    filterObject: (instance: any, predicate: (value: any, index: number, object: any) => any) => any;
    mergeArrays: (...arrays: any[][]) => any[];
    mergeObjects: (...objects: any[]) => any;
    pickFromArray: (instance: any[], items: any[]) => {
        items: any[];
        remainder: any[];
    };
    pickFromObject: (instance: any, items: any[]) => {
        items: any;
        remainder: any;
    };
    prependToArray: (instance: any[], ...values: any[]) => any[];
    prependToObject: (instance: any, ...values: any[]) => any;
    removeFirstMatchFromArray: (instance: any[], predicate: (value: any, index: number, array: any[]) => any) => any[];
    removeFirstMatchFromObject: (instance: any, predicate: (value: any, index: number, object: any) => any) => any;
    removeFromArray: (instance: any[], ...values: any[]) => any[];
    removeKeyFromObject: (instance: any, ...keys: string[]) => any;
    removeValueFromObject: (instance: any, ...values: any[]) => any;
    splitArray: (instance: any[], n: number) => {
        items: any[];
        remainder: any[];
    };
    splitObject: (instance: any, n: number) => {
        items: any;
        remainder: any;
    };
    takeFromArray: (instance: any[], n: number) => any[];
    takeFromObject: (instance: any, n: number) => any;
};
export = _default;
