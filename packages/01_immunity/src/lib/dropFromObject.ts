import assign from 'ponyfills/lib/assign';

function dropFromObject(instance: any, n: number): any {
    const keys = Object.keys(instance),
        offset = keys.length - n;

    let index = 0;

    return Object.keys(instance).reduce(
        (obj, itemKey) => {
            if (index >= offset) {
                return assign({}, obj, {
                    [itemKey]: instance[itemKey],
                });
            }

            index += 1;

            return obj;
        },
        {},
    );
}

export {
    dropFromObject as default,
};
