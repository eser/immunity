function pickFromArray(instance: Array<any>, items: Array<any>): { items: Array<any>, remainder: Array<any> } {
    return instance.reduce(
        (obj, itemValue, itemKey) => {
            if (items.indexOf(itemKey) !== -1) {
                return {
                    items: [ ...obj.items, itemValue ],
                    remainder: obj.remainder,
                };
            }

            return {
                items: obj.items,
                remainder: [ ...obj.remainder, itemValue ],
            };
        },
        {
            items: [],
            remainder: [],
        }
    );
}

export {
    pickFromArray as default,
};
