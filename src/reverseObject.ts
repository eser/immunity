import assign from 'ponyfills/assign';

function reverseObject(instance: any): any {
    const keys = Object.keys(instance);

    return keys.reduce(
        (obj, itemKey) => {
            return assign({}, { [itemKey]: instance[itemKey] }, obj);
        },
        {},
    );
}

export {
    reverseObject as default,
};
