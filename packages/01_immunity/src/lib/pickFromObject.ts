import { assign } from 'ponyfills/lib/assign';

export function pickFromObject(instance, items) {
    const keys = Object.keys(instance);

    return keys.reduce(
        (obj, itemKey) => {
            if (items.indexOf(itemKey) !== -1) {
                return {
                    items: assign({}, obj.items, { [itemKey]: instance[itemKey] }),
                    remainder: obj.remainder
                };
            }

            return {
                items: obj.items,
                remainder: assign({}, obj.remainder, { [itemKey]: instance[itemKey] })
            };
        },
        {
            items: {},
            remainder: {}
        }
    );
};

export default pickFromObject;
