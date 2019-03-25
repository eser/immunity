import assign from 'ponyfills/assign';

function appendToObject(instance: any, ...values: Array<{ [key: string]: any }>): any {
    return assign({}, instance, ...values);
}

export {
    appendToObject as default,
};
