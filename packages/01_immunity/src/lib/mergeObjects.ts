import { assign } from 'ponyfills/lib/assign';

export function mergeObjects(...objects: Array<any>): any {
    return assign({}, ...objects);
};

export default mergeObjects;
