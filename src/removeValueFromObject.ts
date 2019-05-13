import objectAssign from 'ponyfills/objectAssign';

function removeValueFromObject(instance: any, ...values: Array<any>): any {
    return Object.keys(instance).reduce(
        (obj, itemKey) => {
            if (values.indexOf(instance[itemKey]) === -1) {
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
    removeValueFromObject as default,
};
