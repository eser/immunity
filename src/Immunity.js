export class Immunity {
    copy(instance) {
        return Object.keys(instance).reduce(
            (obj, itemKey) => {
                if (!(instance[itemKey] instanceof Function) && (instance[itemKey] instanceof Object)) {
                    return Object.assign(new instance.constructor(), obj, {
                        [itemKey]: this.copy(instance[itemKey])
                    });
                }

                return Object.assign(new instance.constructor(), obj, {
                    [itemKey]: instance[itemKey]
                });
            },
            new instance.constructor()
        );
    }

    appendToArray(instance, ...values) {
        return [
            ...instance,
            ...values
        ];
    }

    prependToArray(instance, ...values) {
        return [
            ...values,
            ...instance
        ];
    }

    appendToObject(instance, ...values) {
        return Object.assign({}, instance, ...values);
    }

    prependToObject(instance, ...values) {
        return Object.assign({}, ...values, instance);
    }

    splitArray(instance, n) {
        const offset = (n >= 0) ? n : instance.length + n;

        return {
            items: instance.slice(0, offset),
            remainder: instance.slice(offset)
        };
    }

    splitObject(instance, n) {
        const keys = Object.keys(instance),
            offset = (n >= 0) ? n : keys.length + n;

        let index = 0;

        return keys.reduce(
            (obj, itemKey) => {

                if (index < offset) {
                    index += 1;

                    return {
                        items: Object.assign({}, obj.items, { [itemKey]: instance[itemKey] }),
                        remainder: obj.remainder
                    };
                }

                return {
                    items: obj.items,
                    remainder: Object.assign({}, obj.remainder, { [itemKey]: instance[itemKey] })
                };
            },
            {
                items: [],
                remainder: []
            }
        );
    }

    takeFromArray(instance, n) {
        return instance.slice(0, n);
    }

    takeFromObject(instance, n) {
        let index = 0;

        return Object.keys(instance).reduce(
            (obj, itemKey) => {

                if (index < n) {
                    index += 1;

                    return Object.assign({}, obj, { [itemKey]: instance[itemKey] });
                }

                return obj;
            },
            {}
        );
    }

    dropFromArray(instance, n) {
        return instance.slice(instance.length - n);
    }

    dropFromObject(instance, n) {
        const keys = Object.keys(instance),
            offset = keys.length - n;

        let index = 0;

        return Object.keys(instance).reduce(
            (obj, itemKey) => {

                if (index >= offset) {
                    return Object.assign({}, obj, { [itemKey]: instance[itemKey] });
                }

                index += 1;

                return obj;
            },
            {}
        );
    }

    filterArray(instance, predicate) {
        return instance.filter(predicate);
    }

    filterObject(instance, predicate) {
        return Object.keys(instance).reduce(
            (obj, itemKey) => {
                if (predicate(itemKey, instance[itemKey])) {
                    return Object.assign({}, obj, {
                        [itemKey]: instance[itemKey]
                    });
                }

                return obj;
            },
            {}
        );
    }

    removeFromArray(instance, ...values) {
        return instance.filter(
            (item) => values.indexOf(item) === -1
        );
    }

    removeKeyFromObject(instance, ...keys) {
        return Object.keys(instance).reduce(
            (obj, itemKey) => {
                if (keys.indexOf(itemKey) === -1) {
                    return Object.assign({}, obj, {
                        [itemKey]: instance[itemKey]
                    });
                }

                return obj;
            },
            {}
        );
    }

    removeValueFromObject(instance, ...values) {
        return Object.keys(instance).reduce(
            (obj, itemKey) => {
                if (values.indexOf(instance[itemKey]) === -1) {
                    return Object.assign({}, obj, {
                        [itemKey]: instance[itemKey]
                    });
                }

                return obj;
            },
            {}
        );
    }

    mergeArrays(...arrays) {
        return arrays.reduce(
            (obj, array) => [ ...obj, ...array ],
            {}
        );
    }

    mergeObjects(...objects) {
        return Object.assign({}, ...objects);
    }
}

export default Immunity;
