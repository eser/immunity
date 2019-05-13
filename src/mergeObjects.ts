import objectAssign from 'ponyfills/objectAssign';

function mergeObjects(...objects: Array<any>): any {
    return objectAssign({}, ...objects);
}

export {
    mergeObjects as default,
};
