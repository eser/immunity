import assign from 'ponyfills/lib/assign';

function prependToObject(instance: any, ...values: Array<any>): any {
    return assign({}, ...values, instance);
}

export {
    prependToObject as default,
};
