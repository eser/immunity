/**
 * immunity
 *
 * @version v0.0.1
 * @link http://eser.ozvataf.com
 */
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

class Immunity {
    copy(instance) {
        return Object.keys(instance).reduce((obj, itemKey) => {
            if (!(instance[itemKey] instanceof Function) && instance[itemKey] instanceof Object) {
                return Object.assign(new instance.constructor(), obj, {
                    [itemKey]: this.fromObject(instance[itemKey])
                });
            }

            return Object.assign(new instance.constructor(), obj, {
                [itemKey]: instance[itemKey]
            });
        }, new instance.constructor());
    }

    appendToArray(instance) {
        for (var _len = arguments.length, values = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            values[_key - 1] = arguments[_key];
        }

        return [].concat(_toConsumableArray(instance), values);
    }

    prependToArray(instance) {
        for (var _len2 = arguments.length, values = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            values[_key2 - 1] = arguments[_key2];
        }

        return [].concat(values, _toConsumableArray(instance));
    }

    appendToObject(instance) {
        for (var _len3 = arguments.length, values = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
            values[_key3 - 1] = arguments[_key3];
        }

        return Object.assign.apply(Object, [{}, instance].concat(values));
    }

    prependToObject(instance) {
        for (var _len4 = arguments.length, values = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
            values[_key4 - 1] = arguments[_key4];
        }

        return Object.assign.apply(Object, [{}].concat(values, [instance]));
    }

    filterArray(instance, predicate) {
        return instance.filter(predicate);
    }

    filterObject(instance, predicate) {
        return Object.keys(instance).reduce((obj, itemKey) => {
            if (predicate(itemKey, instance[itemKey])) {
                return Object.assign({}, obj, {
                    [itemKey]: instance[itemKey]
                });
            }

            return obj;
        }, {});
    }

    removeFromArray(instance) {
        for (var _len5 = arguments.length, values = Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
            values[_key5 - 1] = arguments[_key5];
        }

        return instance.filter(item => values.indexOf(item) === -1);
    }

    removeKeyFromObject(instance) {
        for (var _len6 = arguments.length, keys = Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
            keys[_key6 - 1] = arguments[_key6];
        }

        return Object.keys(instance).reduce((obj, itemKey) => {
            if (keys.indexOf(itemKey) === -1) {
                return Object.assign({}, obj, {
                    [itemKey]: instance[itemKey]
                });
            }

            return obj;
        }, {});
    }

    removeValueFromObject(instance) {
        for (var _len7 = arguments.length, values = Array(_len7 > 1 ? _len7 - 1 : 0), _key7 = 1; _key7 < _len7; _key7++) {
            values[_key7 - 1] = arguments[_key7];
        }

        return Object.keys(instance).reduce((obj, itemKey) => {
            if (values.indexOf(instance[itemKey]) === -1) {
                return Object.assign({}, obj, {
                    [itemKey]: instance[itemKey]
                });
            }

            return obj;
        }, {});
    }

    mergeArrays() {
        for (var _len8 = arguments.length, arrays = Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
            arrays[_key8] = arguments[_key8];
        }

        return arrays.reduce((obj, array) => [].concat(_toConsumableArray(obj), _toConsumableArray(array)), {});
    }

    mergeObjects() {
        for (var _len9 = arguments.length, objects = Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
            objects[_key9] = arguments[_key9];
        }

        return Object.assign.apply(Object, [{}].concat(objects));
    }
}

exports.Immunity = Immunity;
exports.default = Immunity;