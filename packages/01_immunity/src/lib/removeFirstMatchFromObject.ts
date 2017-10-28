import assign from 'ponyfills/lib/assign';

function removeFirstMatchFromObject(instance: any, predicate: (value: any, index: number, object: any) => any): any {
    let notFound = true;

    return Object.keys(instance).reduce(
        (obj, itemKey) => {
            if (notFound && predicate(itemKey, instance[itemKey], obj)) {
                notFound = false;

                return obj;
            }

            return assign({}, obj, {
                [itemKey]: instance[itemKey],
            });
        },
        {},
    );
}

export {
    removeFirstMatchFromObject as default,
};
