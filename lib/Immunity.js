"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var assign_1 = require("./utils/assign");
var Immunity = (function () {
    function Immunity() {
    }
    Immunity.prototype.copy = function (instance) {
        var _this = this;
        var type = instance.constructor;
        return Object.keys(instance).reduce(function (obj, itemKey) {
            if (!(instance[itemKey] instanceof Function) && (instance[itemKey] instanceof Object)) {
                return assign_1.assign(new type(), obj, (_a = {},
                    _a[itemKey] = _this.copy(instance[itemKey]),
                    _a));
            }
            return assign_1.assign(new type(), obj, (_b = {},
                _b[itemKey] = instance[itemKey],
                _b));
            var _a, _b;
        }, new type());
    };
    Immunity.prototype.appendToArray = function (instance) {
        var values = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            values[_i - 1] = arguments[_i];
        }
        return instance.concat(values);
    };
    Immunity.prototype.prependToArray = function (instance) {
        var values = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            values[_i - 1] = arguments[_i];
        }
        return values.concat(instance);
    };
    Immunity.prototype.appendToObject = function (instance) {
        var values = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            values[_i - 1] = arguments[_i];
        }
        return assign_1.assign.apply(void 0, [{}, instance].concat(values));
    };
    Immunity.prototype.prependToObject = function (instance) {
        var values = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            values[_i - 1] = arguments[_i];
        }
        return assign_1.assign.apply(void 0, [{}].concat(values, [instance]));
    };
    Immunity.prototype.pickFromArray = function (instance, items) {
        return instance.reduce(function (obj, itemValue, itemKey) {
            if (items.indexOf(itemKey) !== -1) {
                return {
                    items: obj.items.concat([itemValue]),
                    remainder: obj.remainder
                };
            }
            return {
                items: obj.items,
                remainder: obj.remainder.concat([itemValue])
            };
        }, {
            items: [],
            remainder: []
        });
    };
    Immunity.prototype.pickFromObject = function (instance, items) {
        var keys = Object.keys(instance);
        return keys.reduce(function (obj, itemKey) {
            if (items.indexOf(itemKey) !== -1) {
                return {
                    items: assign_1.assign({}, obj.items, (_a = {}, _a[itemKey] = instance[itemKey], _a)),
                    remainder: obj.remainder
                };
            }
            return {
                items: obj.items,
                remainder: assign_1.assign({}, obj.remainder, (_b = {}, _b[itemKey] = instance[itemKey], _b))
            };
            var _a, _b;
        }, {
            items: {},
            remainder: {}
        });
    };
    Immunity.prototype.splitArray = function (instance, n) {
        var offset = (n >= 0) ? n : instance.length + n;
        return {
            items: instance.slice(0, offset),
            remainder: instance.slice(offset)
        };
    };
    Immunity.prototype.splitObject = function (instance, n) {
        var keys = Object.keys(instance), offset = (n >= 0) ? n : keys.length + n;
        var index = 0;
        return keys.reduce(function (obj, itemKey) {
            if (index < offset) {
                index += 1;
                return {
                    items: assign_1.assign({}, obj.items, (_a = {}, _a[itemKey] = instance[itemKey], _a)),
                    remainder: obj.remainder
                };
            }
            return {
                items: obj.items,
                remainder: assign_1.assign({}, obj.remainder, (_b = {}, _b[itemKey] = instance[itemKey], _b))
            };
            var _a, _b;
        }, {
            items: {},
            remainder: {}
        });
    };
    Immunity.prototype.takeFromArray = function (instance, n) {
        return instance.slice(0, n);
    };
    Immunity.prototype.takeFromObject = function (instance, n) {
        var index = 0;
        return Object.keys(instance).reduce(function (obj, itemKey) {
            if (index < n) {
                index += 1;
                return assign_1.assign({}, obj, (_a = {}, _a[itemKey] = instance[itemKey], _a));
            }
            return obj;
            var _a;
        }, {});
    };
    Immunity.prototype.dropFromArray = function (instance, n) {
        return instance.slice(instance.length - n);
    };
    Immunity.prototype.dropFromObject = function (instance, n) {
        var keys = Object.keys(instance), offset = keys.length - n;
        var index = 0;
        return Object.keys(instance).reduce(function (obj, itemKey) {
            if (index >= offset) {
                return assign_1.assign({}, obj, (_a = {}, _a[itemKey] = instance[itemKey], _a));
            }
            index += 1;
            return obj;
            var _a;
        }, {});
    };
    Immunity.prototype.filterArray = function (instance, predicate) {
        return instance.filter(predicate);
    };
    Immunity.prototype.filterObject = function (instance, predicate) {
        return Object.keys(instance).reduce(function (obj, itemKey) {
            if (predicate(itemKey, instance[itemKey])) {
                return assign_1.assign({}, obj, (_a = {},
                    _a[itemKey] = instance[itemKey],
                    _a));
            }
            return obj;
            var _a;
        }, {});
    };
    Immunity.prototype.removeFromArray = function (instance) {
        var values = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            values[_i - 1] = arguments[_i];
        }
        return instance.filter(function (item) { return values.indexOf(item) === -1; });
    };
    Immunity.prototype.removeKeyFromObject = function (instance) {
        var keys = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            keys[_i - 1] = arguments[_i];
        }
        return Object.keys(instance).reduce(function (obj, itemKey) {
            if (keys.indexOf(itemKey) === -1) {
                return assign_1.assign({}, obj, (_a = {},
                    _a[itemKey] = instance[itemKey],
                    _a));
            }
            return obj;
            var _a;
        }, {});
    };
    Immunity.prototype.removeValueFromObject = function (instance) {
        var values = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            values[_i - 1] = arguments[_i];
        }
        return Object.keys(instance).reduce(function (obj, itemKey) {
            if (values.indexOf(instance[itemKey]) === -1) {
                return assign_1.assign({}, obj, (_a = {},
                    _a[itemKey] = instance[itemKey],
                    _a));
            }
            return obj;
            var _a;
        }, {});
    };
    Immunity.prototype.mergeArrays = function () {
        var arrays = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            arrays[_i] = arguments[_i];
        }
        return arrays.reduce(function (obj, array) { return obj.concat(array); }, []);
    };
    Immunity.prototype.mergeObjects = function () {
        var objects = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            objects[_i] = arguments[_i];
        }
        return assign_1.assign.apply(void 0, [{}].concat(objects));
    };
    return Immunity;
}());
exports.Immunity = Immunity;
exports.default = Immunity;
//# sourceMappingURL=Immunity.js.map