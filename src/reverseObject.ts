import objectAssign from 'ponyfills/objectAssign';

function reverseObject(instance: any): any {
    const keys = Object.keys(instance);

    return keys.reduce(
        (obj, itemKey) => objectAssign({}, { [itemKey]: instance[itemKey] }, obj),
        {},
    );
}

export {
    reverseObject as default,
};
