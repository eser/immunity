import objectAssign from 'ponyfills/objectAssign';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function appendToArray(instance) {
    var values = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        values[_i - 1] = arguments[_i];
    }
    return __spread(instance, values);
}

function appendToObject(instance) {
    var values = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        values[_i - 1] = arguments[_i];
    }
    return objectAssign.apply(void 0, __spread([{}, instance], values));
}

function copy(instance) {
    var Type = instance.constructor;
    return Object.keys(instance).reduce(function (obj, itemKey) {
        var _a, _b;
        if (!(instance[itemKey] instanceof Function) && (instance[itemKey] instanceof Object)) {
            return objectAssign(new Type(), obj, (_a = {},
                _a[itemKey] = copy(instance[itemKey]),
                _a));
        }
        return objectAssign(new Type(), obj, (_b = {},
            _b[itemKey] = instance[itemKey],
            _b));
    }, new Type());
}

function dropFromArray(instance, n) {
    var arrInstance = (instance.constructor === Array) ?
        instance : __spread(instance);
    return arrInstance.slice(n);
}

function dropFromObject(instance, n) {
    var index = 0;
    return Object.keys(instance).reduce(function (obj, itemKey) {
        var _a;
        if (n > index) {
            index += 1;
            return obj;
        }
        return objectAssign({}, obj, (_a = {},
            _a[itemKey] = instance[itemKey],
            _a));
    }, {});
}

function filterArray(instance, predicate) {
    var arrInstance = (instance.constructor === Array) ?
        instance : __spread(instance);
    return arrInstance.filter(predicate);
}

function filterObject(instance, predicate) {
    return Object.keys(instance).reduce(function (obj, itemKey) {
        var _a;
        if (predicate(instance[itemKey], itemKey, obj)) {
            return objectAssign({}, obj, (_a = {},
                _a[itemKey] = instance[itemKey],
                _a));
        }
        return obj;
    }, {});
}

function mapArray(instance, predicate) {
    var arrInstance = (instance.constructor === Array) ?
        instance : __spread(instance);
    return arrInstance.map(predicate);
}

function mapObject(instance, predicate) {
    return Object.keys(instance).reduce(function (obj, itemKey) {
        var value = predicate(instance[itemKey], itemKey, obj);
        if (value !== null) {
            return objectAssign({}, obj, value);
        }
        return obj;
    }, {});
}

function mergeArrays() {
    var arrays = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arrays[_i] = arguments[_i];
    }
    return arrays.reduce(function (obj, array) { return __spread(obj, array); }, []);
}

function mergeObjects() {
    var objects = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        objects[_i] = arguments[_i];
    }
    return objectAssign.apply(void 0, __spread([{}], objects));
}

function pickFromArray(instance, items) {
    var arrInstance = (instance.constructor === Array) ?
        instance : __spread(instance);
    var arrItems = (items.constructor === Array) ?
        items : __spread(items);
    return arrInstance.reduce(function (obj, itemValue, itemKey) {
        if (arrItems.indexOf(itemValue) !== -1) {
            return {
                items: __spread(obj.items, [itemValue]),
                rest: obj.rest,
            };
        }
        return {
            items: obj.items,
            rest: __spread(obj.rest, [itemValue]),
        };
    }, {
        items: [],
        rest: [],
    });
}

function pickFromObject(instance, items) {
    var keys = Object.keys(instance);
    return keys.reduce(function (obj, itemKey) {
        var _a, _b;
        if (items.indexOf(itemKey) !== -1) {
            return {
                items: objectAssign({}, obj.items, (_a = {}, _a[itemKey] = instance[itemKey], _a)),
                rest: obj.rest,
            };
        }
        return {
            items: obj.items,
            rest: objectAssign({}, obj.rest, (_b = {}, _b[itemKey] = instance[itemKey], _b)),
        };
    }, {
        items: {},
        rest: {},
    });
}

function prependToArray(instance) {
    var values = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        values[_i - 1] = arguments[_i];
    }
    return __spread(values, instance);
}

function prependToObject(instance) {
    var values = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        values[_i - 1] = arguments[_i];
    }
    return objectAssign.apply(void 0, __spread([{}], values, [instance]));
}

function removeFirstMatchFromArray(instance, predicate) {
    var arrInstance = (instance.constructor === Array) ?
        instance : __spread(instance);
    var notFound = true;
    return arrInstance.filter(function (itemValue, itemKey, obj) {
        if (notFound && predicate(itemValue, itemKey, obj)) {
            notFound = false;
            return false;
        }
        return true;
    });
}

function removeFirstMatchFromObject(instance, predicate) {
    var notFound = true;
    return Object.keys(instance).reduce(function (obj, itemKey) {
        var _a;
        if (notFound && predicate(instance[itemKey], itemKey, obj)) {
            notFound = false;
            return obj;
        }
        return objectAssign({}, obj, (_a = {},
            _a[itemKey] = instance[itemKey],
            _a));
    }, {});
}

function removeFromArray(instance) {
    var values = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        values[_i - 1] = arguments[_i];
    }
    var arrInstance = (instance.constructor === Array) ?
        instance : __spread(instance);
    return arrInstance.filter(function (item) { return values.indexOf(item) === -1; });
}

function removeKeyFromObject(instance) {
    var keys = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        keys[_i - 1] = arguments[_i];
    }
    return Object.keys(instance).reduce(function (obj, itemKey) {
        var _a;
        if (keys.indexOf(itemKey) === -1) {
            return objectAssign({}, obj, (_a = {},
                _a[itemKey] = instance[itemKey],
                _a));
        }
        return obj;
    }, {});
}

function removeValueFromObject(instance) {
    var values = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        values[_i - 1] = arguments[_i];
    }
    return Object.keys(instance).reduce(function (obj, itemKey) {
        var _a;
        if (values.indexOf(instance[itemKey]) === -1) {
            return objectAssign({}, obj, (_a = {},
                _a[itemKey] = instance[itemKey],
                _a));
        }
        return obj;
    }, {});
}

function splitArray(instance, n) {
    var arrInstance = (instance.constructor === Array) ?
        instance : __spread(instance);
    return {
        items: arrInstance.slice(0, n),
        rest: arrInstance.slice(n),
    };
}

function splitObject(instance, n) {
    var keys = Object.keys(instance);
    var index = 0;
    return keys.reduce(function (obj, itemKey) {
        var _a, _b;
        if (index < n) {
            index += 1;
            return {
                items: objectAssign({}, obj.items, (_a = {}, _a[itemKey] = instance[itemKey], _a)),
                rest: obj.rest,
            };
        }
        return {
            items: obj.items,
            rest: objectAssign({}, obj.rest, (_b = {}, _b[itemKey] = instance[itemKey], _b)),
        };
    }, {
        items: {},
        rest: {},
    });
}

function takeFromArray(instance, n) {
    var arrInstance = (instance.constructor === Array) ?
        instance : __spread(instance);
    return arrInstance.slice(0, n);
}

function takeFromObject(instance, n) {
    var index = 0;
    return Object.keys(instance).reduce(function (obj, itemKey) {
        var _a;
        if (index < n) {
            index += 1;
            return objectAssign({}, obj, (_a = {}, _a[itemKey] = instance[itemKey], _a));
        }
        return obj;
    }, {});
}

var library = {
    appendToArray: appendToArray,
    appendToObject: appendToObject,
    copy: copy,
    dropFromArray: dropFromArray,
    dropFromObject: dropFromObject,
    filterArray: filterArray,
    filterObject: filterObject,
    mapArray: mapArray,
    mapObject: mapObject,
    mergeArrays: mergeArrays,
    mergeObjects: mergeObjects,
    pickFromArray: pickFromArray,
    pickFromObject: pickFromObject,
    prependToArray: prependToArray,
    prependToObject: prependToObject,
    removeFirstMatchFromArray: removeFirstMatchFromArray,
    removeFirstMatchFromObject: removeFirstMatchFromObject,
    removeFromArray: removeFromArray,
    removeKeyFromObject: removeKeyFromObject,
    removeValueFromObject: removeValueFromObject,
    splitArray: splitArray,
    splitObject: splitObject,
    takeFromArray: takeFromArray,
    takeFromObject: takeFromObject,
};

export default library;
export { appendToArray, appendToObject, copy, dropFromArray, dropFromObject, filterArray, filterObject, mapArray, mapObject, mergeArrays, mergeObjects, pickFromArray, pickFromObject, prependToArray, prependToObject, removeFirstMatchFromArray, removeFirstMatchFromObject, removeFromArray, removeKeyFromObject, removeValueFromObject, splitArray, splitObject, takeFromArray, takeFromObject };
