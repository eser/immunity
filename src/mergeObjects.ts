import assign from 'ponyfills/assign';

function mergeObjects(...objects: Array<any>): any {
    return assign({}, ...objects);
};

export {
    mergeObjects as default,
};
