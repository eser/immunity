import { assign } from 'ponyfills/lib/assign';

export function dropFromObject(instance: Object, n: number): Object {
    const keys = Object.keys(instance),
        offset = keys.length - n;

    let index = 0;

    return Object.keys(instance).reduce(
        (obj, itemKey) => {
            if (index >= offset) {
                return assign({}, obj, { [itemKey]: instance[itemKey] });
            }

            index += 1;

            return obj;
        },
        {}
    );
}

export default dropFromObject;
