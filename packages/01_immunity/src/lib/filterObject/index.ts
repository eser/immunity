import { assign } from 'ponyfills/lib/assign';

export function filterObject(instance: Object, predicate): Object {
    return Object.keys(instance).reduce(
        (obj, itemKey) => {
            if (predicate(itemKey, instance[itemKey])) {
                return assign({}, obj, {
                    [itemKey]: instance[itemKey]
                });
            }

            return obj;
        },
        {}
    );
}

export default filterObject;
