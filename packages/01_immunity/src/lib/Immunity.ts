import { assign } from 'ponyfills';

export class Immunity {
    copy(instance: Object): Object {
        const type: any = instance.constructor;

        return Object.keys(instance).reduce(
            (obj, itemKey) => {
                if (!(instance[itemKey] instanceof Function) && (instance[itemKey] instanceof Object)) {
                    return assign(new type(), obj, {
                        [itemKey]: this.copy(instance[itemKey])
                    });
                }

                return assign(new type(), obj, {
                    [itemKey]: instance[itemKey]
                });
            },
            new type()
        );
    }

    appendToArray(instance: any[], ...values: any[]): any[] {
        return [
            ...instance,
            ...values
        ];
    }

    prependToArray(instance: any[], ...values: any[]): any[] {
        return [
            ...values,
            ...instance
        ];
    }

    appendToObject(instance: Object, ...values: Object[]): Object {
        return assign({}, instance, ...values);
    }

    prependToObject(instance: Object, ...values: Object[]): Object {
        return assign({}, ...values, instance);
    }

    pickFromArray(instance: any[], items: any[]): { items: any[], remainder: any[] } {
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
    }

    pickFromObject(instance, items) {
        const keys = Object.keys(instance);

        return keys.reduce(
            (obj, itemKey) => {
                if (items.indexOf(itemKey) !== -1) {
                    return {
                        items: assign({}, obj.items, { [itemKey]: instance[itemKey] }),
                        remainder: obj.remainder
                    };
                }

                return {
                    items: obj.items,
                    remainder: assign({}, obj.remainder, { [itemKey]: instance[itemKey] })
                };
            },
            {
                items: {},
                remainder: {}
            }
        );
    }

    splitArray(instance: any[], n: number): { items: any[], remainder: any[] } {
        const offset = (n >= 0) ? n : instance.length + n;

        return {
            items: instance.slice(0, offset),
            remainder: instance.slice(offset)
        };
    }

    splitObject(instance: Object, n: number): { items: Object, remainder: Object } {
        const keys = Object.keys(instance),
            offset = (n >= 0) ? n : keys.length + n;

        let index = 0;

        return keys.reduce(
            (obj, itemKey) => {
                if (index < offset) {
                    index += 1;

                    return {
                        items: assign({}, obj.items, { [itemKey]: instance[itemKey] }),
                        remainder: obj.remainder
                    };
                }

                return {
                    items: obj.items,
                    remainder: assign({}, obj.remainder, { [itemKey]: instance[itemKey] })
                };
            },
            {
                items: {},
                remainder: {}
            }
        );
    }

    takeFromArray(instance: any[], n: number): any[] {
        return instance.slice(0, n);
    }

    takeFromObject(instance: Object, n: number): Object {
        let index = 0;

        return Object.keys(instance).reduce(
            (obj, itemKey) => {
                if (index < n) {
                    index += 1;

                    return assign({}, obj, { [itemKey]: instance[itemKey] });
                }

                return obj;
            },
            {}
        );
    }

    dropFromArray(instance: any[], n: number): any[] {
        return instance.slice(instance.length - n);
    }

    dropFromObject(instance: Object, n: number): Object {
        const keys = Object.keys(instance),
            offset = keys.length - n;

        let index = 0;

        return Object.keys(instance).reduce(
            (obj, itemKey) => {
                if (index >= offset) {
                    return assign({}, obj, { [itemKey]: instance[itemKey] });
                }

                index += 1;

                return obj;
            },
            {}
        );
    }

    filterArray(instance: any[], predicate): any[] {
        return instance.filter(predicate);
    }

    filterObject(instance: Object, predicate): Object {
        return Object.keys(instance).reduce(
            (obj, itemKey) => {
                if (predicate(itemKey, instance[itemKey])) {
                    return assign({}, obj, {
                        [itemKey]: instance[itemKey]
                    });
                }

                return obj;
            },
            {}
        );
    }

    removeFromArray(instance: any[], ...values: any[]): any[] {
        return instance.filter(
            (item) => values.indexOf(item) === -1
        );
    }

    removeKeyFromObject(instance: Object, ...keys: string[]): Object {
        return Object.keys(instance).reduce(
            (obj, itemKey) => {
                if (keys.indexOf(itemKey) === -1) {
                    return assign({}, obj, {
                        [itemKey]: instance[itemKey]
                    });
                }

                return obj;
            },
            {}
        );
    }

    removeValueFromObject(instance: Object, ...values: any[]): Object {
        return Object.keys(instance).reduce(
            (obj, itemKey) => {
                if (values.indexOf(instance[itemKey]) === -1) {
                    return assign({}, obj, {
                        [itemKey]: instance[itemKey]
                    });
                }

                return obj;
            },
            {}
        );
    }

    mergeArrays(...arrays: any[][]): any[] {
        return arrays.reduce(
            (obj, array) => [...obj, ...array],
            []
        );
    }

    mergeObjects(...objects: Object[]): Object {
        return assign({}, ...objects);
    }
}

export default Immunity;
