import assign from 'ponyfills/lib/assign';

function filterObject(instance: any, predicate: (value: any, key?: any, instance?: any) => any): any {
    return Object.keys(instance).reduce(
        (obj, itemKey) => {
            if (predicate(instance[itemKey], itemKey, obj)) {
                return assign({}, obj, {
                    [itemKey]: instance[itemKey],
                });
            }

            return obj;
        },
        {},
    );
}

export {
    filterObject as default,
};
