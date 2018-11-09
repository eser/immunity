import assign from 'ponyfills/lib/assign';

function removeValueFromObject(instance: any, ...values: Array<any>): any {
    return Object.keys(instance).reduce(
        (obj, itemKey) => {
            if (values.indexOf(instance[itemKey]) === -1) {
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
    removeValueFromObject as default,
};
