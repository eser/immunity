import { assign } from 'ponyfills/lib/assign';

export function appendToObject(instance: any, ...values: Array<{ [key: string]: any }>): any {
    return assign({}, instance, ...values);
};

export default appendToObject;
