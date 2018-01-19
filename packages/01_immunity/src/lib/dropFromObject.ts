import assign from 'ponyfills/lib/assign';

function dropFromObject(instance: any, n: number): any {
    const keys = Object.keys(instance);

    let index = 0;

    return Object.keys(instance).reduce(
        (obj, itemKey) => {
            if (n > index) {
                index += 1;

                return obj;
            }

            return assign({}, obj, {
                [itemKey]: instance[itemKey],
            });
        },
        {},
    );
}

export {
    dropFromObject as default,
};
