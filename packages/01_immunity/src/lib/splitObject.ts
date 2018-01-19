import assign from 'ponyfills/lib/assign';

function splitObject(instance: any, n: number): { items: any, rest: any } {
    const keys = Object.keys(instance),
        offset = (n >= 0) ? n : keys.length + n;

    let index = 0;

    return keys.reduce(
        (obj, itemKey) => {
            if (index < offset) {
                index += 1;

                return {
                    items: assign({}, obj.items, { [itemKey]: instance[itemKey] }),
                    rest: obj.rest,
                };
            }

            return {
                items: obj.items,
                rest: assign({}, obj.rest, { [itemKey]: instance[itemKey] }),
            };
        },
        {
            items: {},
            rest: {},
        },
    );
}

export {
    splitObject as default,
};
