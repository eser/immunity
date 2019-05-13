import objectAssign from 'ponyfills/objectAssign';

function splitLastObject(instance: any, n: number): { items: any, rest: any } {
    const keys = Object.keys(instance);
    const offset = keys.length - n;

    let index = 0;

    return keys.reduce(
        (obj, itemKey) => {
            if (index < offset) {
                index += 1;

                return {
                    items: obj.items,
                    rest: objectAssign({}, obj.rest, { [itemKey]: instance[itemKey] }),
                };
            }

            return {
                items: objectAssign({}, obj.items, { [itemKey]: instance[itemKey] }),
                rest: obj.rest,
            };
        },
        {
            items: {},
            rest: {},
        },
    );
}

export {
    splitLastObject as default,
};
