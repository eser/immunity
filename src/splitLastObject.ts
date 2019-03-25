import assign from 'ponyfills/assign';

function splitLastObject(instance: any, n: number): { items: any, rest: any } {
    const keys = Object.keys(instance),
        offset = keys.length - n;

    let index = 0;

    return keys.reduce(
        (obj, itemKey) => {
            if (index < offset) {
                index += 1;

                return {
                    items: obj.items,
                    rest: assign({}, obj.rest, { [itemKey]: instance[itemKey] }),
                };
            }

            return {
                items: assign({}, obj.items, { [itemKey]: instance[itemKey] }),
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
