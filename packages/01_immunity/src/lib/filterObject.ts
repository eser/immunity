import { assign } from 'ponyfills/lib/assign';

export function filterObject(instance: any, predicate: (value: any, index: number, object: any) => any): any {
    return Object.keys(instance).reduce(
        (obj, itemKey) => {
            if (predicate(itemKey, instance[itemKey], obj)) {
                return assign({}, obj, {
                    [itemKey]: instance[itemKey]
                });
            }

            return obj;
        },
        {}
    );
};

export default filterObject;
