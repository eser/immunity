function pickFromArray(instance: Iterable<any>, items: Iterable<any>): { items: Array<any>, rest: Array<any> } {
    const arrInstance = (instance.constructor === Array) ?
        <Array<any>>instance :
        [ ...instance ];

    const arrItems = (items.constructor === Array) ?
        <Array<any>>items :
        [ ...items ];

    return arrInstance.reduce(
        (obj, itemValue, itemKey) => {
            if (arrItems.indexOf(itemValue) !== -1) {
                return {
                    items: [ ...obj.items, itemValue ],
                    rest: obj.rest,
                };
            }

            return {
                items: obj.items,
                rest: [ ...obj.rest, itemValue ],
            };
        },
        {
            items: [],
            rest: [],
        },
    );
}

export {
    pickFromArray as default,
};
