declare function appendToArray(instance: Iterable<any>, ...values: Array<any>): Array<any>;

declare function appendToObject(instance: any, ...values: Array<{
    [key: string]: any;
}>): any;

declare function copy(instance: any): any;

declare function dropFromArray(instance: Iterable<any>, n: number): Array<any>;

declare function dropFromObject(instance: any, n: number): any;

declare function filterArray(instance: Iterable<any>, predicate: (value: any, index?: number, instance?: Iterable<any>) => any): Array<any>;

declare function filterObject(instance: any, predicate: (value: any, key?: any, instance?: any) => any): any;

declare function mapArray(instance: Iterable<any>, predicate: (value: any, index?: number, instance?: Iterable<any>) => any): Array<any>;

declare function mapObject(instance: any, predicate: (value: any, key?: any, instance?: any) => any): any;

declare function mergeArrays(...arrays: Array<Iterable<any>>): Array<any>;

declare function mergeObjects(...objects: Array<any>): any;

declare function pickFromArray(instance: Iterable<any>, items: Iterable<any>): {
    items: Array<any>;
    rest: Array<any>;
};

declare function pickFromObject(instance: any, items: Array<any>): {
    items: any;
    rest: any;
};

declare function prependToArray(instance: Iterable<any>, ...values: Array<any>): Array<any>;

declare function prependToObject(instance: any, ...values: Array<any>): any;

declare function removeFirstMatchFromArray(instance: Iterable<any>, predicate: (value: any, index: number, instance: Iterable<any>) => any): Array<any>;

declare function removeFirstMatchFromObject(instance: any, predicate: (value: any, index: any, object: any) => any): any;

declare function removeFromArray(instance: Iterable<any>, ...values: Array<any>): Array<any>;

declare function removeKeyFromObject(instance: any, ...keys: Array<string>): any;

declare function removeValueFromObject(instance: any, ...values: Array<any>): any;

declare function splitArray(instance: Iterable<any>, n: number): {
    items: Array<any>;
    rest: Array<any>;
};

declare function splitObject(instance: any, n: number): {
    items: any;
    rest: any;
};

declare function takeFromArray(instance: Iterable<any>, n: number): Array<any>;

declare function takeFromObject(instance: any, n: number): any;

declare const library: {
    appendToArray: typeof appendToArray;
    appendToObject: typeof appendToObject;
    copy: typeof copy;
    dropFromArray: typeof dropFromArray;
    dropFromObject: typeof dropFromObject;
    filterArray: typeof filterArray;
    filterObject: typeof filterObject;
    mapArray: typeof mapArray;
    mapObject: typeof mapObject;
    mergeArrays: typeof mergeArrays;
    mergeObjects: typeof mergeObjects;
    pickFromArray: typeof pickFromArray;
    pickFromObject: typeof pickFromObject;
    prependToArray: typeof prependToArray;
    prependToObject: typeof prependToObject;
    removeFirstMatchFromArray: typeof removeFirstMatchFromArray;
    removeFirstMatchFromObject: typeof removeFirstMatchFromObject;
    removeFromArray: typeof removeFromArray;
    removeKeyFromObject: typeof removeKeyFromObject;
    removeValueFromObject: typeof removeValueFromObject;
    splitArray: typeof splitArray;
    splitObject: typeof splitObject;
    takeFromArray: typeof takeFromArray;
    takeFromObject: typeof takeFromObject;
};

export default library;
export { appendToArray, appendToObject, copy, dropFromArray, dropFromObject, filterArray, filterObject, mapArray, mapObject, mergeArrays, mergeObjects, pickFromArray, pickFromObject, prependToArray, prependToObject, removeFirstMatchFromArray, removeFirstMatchFromObject, removeFromArray, removeKeyFromObject, removeValueFromObject, splitArray, splitObject, takeFromArray, takeFromObject };
