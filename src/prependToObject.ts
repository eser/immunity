import objectAssign from 'ponyfills/objectAssign';

function prependToObject(instance: any, ...values: Array<any>): any {
    return objectAssign({}, ...values, instance);
}

export {
    prependToObject as default,
};
