import objectAssign from 'ponyfills/objectAssign';

function mapObject(instance: any, predicate: (value: any, key?: any, instance?: any) => any): any {
    return Object.keys(instance).reduce(
        (obj, itemKey) => {
            const value = predicate(instance[itemKey], itemKey, obj);

            if (value !== null) {
                return objectAssign({}, obj, value);
            }

            return obj;
        },
        {},
    );
}

export {
    mapObject as default,
};
