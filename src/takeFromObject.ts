import objectAssign from 'ponyfills/objectAssign';

function takeFromObject(instance: any, n: number): any {
    let index = 0;

    return Object.keys(instance).reduce(
        (obj, itemKey) => {
            if (index < n) {
                index += 1;

                return objectAssign({}, obj, { [itemKey]: instance[itemKey] });
            }

            return obj;
        },
        {},
    );
}

export {
    takeFromObject as default,
};
