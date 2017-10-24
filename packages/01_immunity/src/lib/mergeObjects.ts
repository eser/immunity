import assign from 'ponyfills/lib/assign';

function mergeObjects(...objects: Array<any>): any {
    return assign({}, ...objects);
};

export {
    mergeObjects as default,
};
