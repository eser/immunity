import { assign } from 'ponyfills/lib/assign';

export function appendToObject(instance: Object, ...values: Object[]): Object {
    return assign({}, instance, ...values);
}

export default appendToObject;
