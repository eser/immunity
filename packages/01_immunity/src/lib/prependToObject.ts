import { assign } from 'ponyfills/lib/assign';

export function prependToObject(instance: any, ...values: Array<any>): any {
    return assign({}, ...values, instance);
};

export default prependToObject;
