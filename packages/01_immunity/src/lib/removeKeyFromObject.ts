import { assign } from 'ponyfills/lib/assign';

export function removeKeyFromObject(instance: Object, ...keys: string[]): Object {
    return Object.keys(instance).reduce(
        (obj, itemKey) => {
            if (keys.indexOf(itemKey) === -1) {
                return assign({}, obj, {
                    [itemKey]: instance[itemKey]
                });
            }

            return obj;
        },
        {}
    );
};

export default removeKeyFromObject;
