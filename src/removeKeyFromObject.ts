import assign from 'ponyfills/assign';

function removeKeyFromObject(instance: any, ...keys: Array<string>): any {
    return Object.keys(instance).reduce(
        (obj, itemKey) => {
            if (keys.indexOf(itemKey) === -1) {
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
    removeKeyFromObject as default,
};
