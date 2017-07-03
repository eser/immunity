import { assign } from 'ponyfills/lib/assign';

export function prependToObject(instance: Object, ...values: Object[]): Object {
    return assign({}, ...values, instance);
};

export default prependToObject;
