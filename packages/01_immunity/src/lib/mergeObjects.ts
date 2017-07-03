import { assign } from 'ponyfills/lib/assign';

export function mergeObjects(...objects: Object[]): Object {
    return assign({}, ...objects);
};

export default mergeObjects;
