"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ponyfills_1 = require("ponyfills");
class Immunity {
    copy(instance) {
        const type = instance.constructor;
        return Object.keys(instance).reduce((obj, itemKey) => {
            if (!(instance[itemKey] instanceof Function) && (instance[itemKey] instanceof Object)) {
                return ponyfills_1.assign(new type(), obj, {
                    [itemKey]: this.copy(instance[itemKey])
                });
            }
            return ponyfills_1.assign(new type(), obj, {
                [itemKey]: instance[itemKey]
            });
        }, new type());
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
        return ponyfills_1.assign({}, instance, ...values);
    }
    prependToObject(instance, ...values) {
        return ponyfills_1.assign({}, ...values, instance);
    }
    pickFromArray(instance, items) {
        return instance.reduce((obj, itemValue, itemKey) => {
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
        }, {
            items: [],
            remainder: []
        });
    }
    pickFromObject(instance, items) {
        const keys = Object.keys(instance);
        return keys.reduce((obj, itemKey) => {
            if (items.indexOf(itemKey) !== -1) {
                return {
                    items: ponyfills_1.assign({}, obj.items, { [itemKey]: instance[itemKey] }),
                    remainder: obj.remainder
                };
            }
            return {
                items: obj.items,
                remainder: ponyfills_1.assign({}, obj.remainder, { [itemKey]: instance[itemKey] })
            };
        }, {
            items: {},
            remainder: {}
        });
    }
    splitArray(instance, n) {
        const offset = (n >= 0) ? n : instance.length + n;
        return {
            items: instance.slice(0, offset),
            remainder: instance.slice(offset)
        };
    }
    splitObject(instance, n) {
        const keys = Object.keys(instance), offset = (n >= 0) ? n : keys.length + n;
        let index = 0;
        return keys.reduce((obj, itemKey) => {
            if (index < offset) {
                index += 1;
                return {
                    items: ponyfills_1.assign({}, obj.items, { [itemKey]: instance[itemKey] }),
                    remainder: obj.remainder
                };
            }
            return {
                items: obj.items,
                remainder: ponyfills_1.assign({}, obj.remainder, { [itemKey]: instance[itemKey] })
            };
        }, {
            items: {},
            remainder: {}
        });
    }
    takeFromArray(instance, n) {
        return instance.slice(0, n);
    }
    takeFromObject(instance, n) {
        let index = 0;
        return Object.keys(instance).reduce((obj, itemKey) => {
            if (index < n) {
                index += 1;
                return ponyfills_1.assign({}, obj, { [itemKey]: instance[itemKey] });
            }
            return obj;
        }, {});
    }
    dropFromArray(instance, n) {
        return instance.slice(instance.length - n);
    }
    dropFromObject(instance, n) {
        const keys = Object.keys(instance), offset = keys.length - n;
        let index = 0;
        return Object.keys(instance).reduce((obj, itemKey) => {
            if (index >= offset) {
                return ponyfills_1.assign({}, obj, { [itemKey]: instance[itemKey] });
            }
            index += 1;
            return obj;
        }, {});
    }
    filterArray(instance, predicate) {
        return instance.filter(predicate);
    }
    filterObject(instance, predicate) {
        return Object.keys(instance).reduce((obj, itemKey) => {
            if (predicate(itemKey, instance[itemKey])) {
                return ponyfills_1.assign({}, obj, {
                    [itemKey]: instance[itemKey]
                });
            }
            return obj;
        }, {});
    }
    removeFromArray(instance, ...values) {
        return instance.filter((item) => values.indexOf(item) === -1);
    }
    removeKeyFromObject(instance, ...keys) {
        return Object.keys(instance).reduce((obj, itemKey) => {
            if (keys.indexOf(itemKey) === -1) {
                return ponyfills_1.assign({}, obj, {
                    [itemKey]: instance[itemKey]
                });
            }
            return obj;
        }, {});
    }
    removeValueFromObject(instance, ...values) {
        return Object.keys(instance).reduce((obj, itemKey) => {
            if (values.indexOf(instance[itemKey]) === -1) {
                return ponyfills_1.assign({}, obj, {
                    [itemKey]: instance[itemKey]
                });
            }
            return obj;
        }, {});
    }
    mergeArrays(...arrays) {
        return arrays.reduce((obj, array) => [...obj, ...array], []);
    }
    mergeObjects(...objects) {
        return ponyfills_1.assign({}, ...objects);
    }
}
exports.Immunity = Immunity;
exports.default = Immunity;
//# sourceMappingURL=Immunity.js.map