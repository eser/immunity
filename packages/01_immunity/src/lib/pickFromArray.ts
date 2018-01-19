function pickFromArray(instance: Array<any>, items: Array<any>): { items: Array<any>, rest: Array<any> } {
    return instance.reduce(
        (obj, itemValue, itemKey) => {
            if (items.indexOf(itemValue) !== -1) {
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
