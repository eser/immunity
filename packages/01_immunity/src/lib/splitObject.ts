import assign from 'ponyfills/lib/assign';

function splitObject(instance: any, n: number): { items: any, remainder: any } {
    const keys = Object.keys(instance),
        offset = (n >= 0) ? n : keys.length + n;

    let index = 0;

    return keys.reduce(
        (obj, itemKey) => {
            if (index < offset) {
                index += 1;

                return {
                    items: assign({}, obj.items, { [itemKey]: instance[itemKey] }),
                    remainder: obj.remainder,
                };
            }

            return {
                items: obj.items,
                remainder: assign({}, obj.remainder, { [itemKey]: instance[itemKey] }),
            };
        },
        {
            items: {},
            remainder: {},
        }
    );
}

export {
    splitObject as default,
};
