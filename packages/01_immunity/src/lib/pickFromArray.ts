export function pickFromArray(instance: any[], items: any[]): { items: any[], remainder: any[] } {
    return instance.reduce(
        (obj, itemValue, itemKey) => {
            if (items.indexOf(itemKey) !== -1) {
                return {
                    items: [...obj.items, itemValue],
                    remainder: obj.remainder
                };
            }

            return {
                items: obj.items,
                remainder: [...obj.remainder, itemValue]
            };
        },
        {
            items: [],
            remainder: []
        }
    );
};

export default pickFromArray;
