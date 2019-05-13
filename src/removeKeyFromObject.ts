import objectAssign from 'ponyfills/objectAssign';

function removeKeyFromObject(instance: any, ...keys: Array<string>): any {
    return Object.keys(instance).reduce(
        (obj, itemKey) => {
            if (keys.indexOf(itemKey) === -1) {
                return objectAssign({}, obj, {
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
