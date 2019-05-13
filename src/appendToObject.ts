import objectAssign from 'ponyfills/objectAssign';

function appendToObject(instance: any, ...values: Array<{ [key: string]: any }>): any {
    return objectAssign({}, instance, ...values);
}

export {
    appendToObject as default,
};
