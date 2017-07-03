import { assign } from 'ponyfills/lib/assign';

export function copy(instance: Object): Object {
    const type: any = instance.constructor;

    return Object.keys(instance).reduce(
        (obj, itemKey) => {
            if (!(instance[itemKey] instanceof Function) && (instance[itemKey] instanceof Object)) {
                return assign(new type(), obj, {
                    [itemKey]: copy(instance[itemKey])
                });
            }

            return assign(new type(), obj, {
                [itemKey]: instance[itemKey]
            });
        },
        new type()
    );
};

export default copy;
