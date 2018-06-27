"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
var immunity = require("immunity");
var assign_1 = require("ponyfills/lib/assign");
var Rule_1 = require("./Rule");
var Types_1 = require("./Types");
var Validator = (function () {
    function Validator() {
    }
    Validator.getArgvKeys = function (rule, key, condition) {
        var e_1, _a;
        var keys = [];
        if (condition(key)) {
            keys = immunity.appendToArray(keys, key);
        }
        if (rule.aliases !== undefined) {
            try {
                for (var _b = __values(rule.aliases), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var alias = _c.value;
                    if (condition(alias)) {
                        keys = immunity.appendToArray(keys, alias);
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        return keys;
    };
    Validator.executeValidatorSingle = function (validatorFunc, childKey, value) {
        return __awaiter(this, void 0, void 0, function () {
            var validationMethodResult;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, validatorFunc(value)];
                    case 1:
                        validationMethodResult = _a.sent();
                        if (validationMethodResult !== true) {
                            return [2, [
                                    { error: "validation failed for " + childKey + ". value is \"" + value + "\": " + validationMethodResult }
                                ]];
                        }
                        return [2, []];
                }
            });
        });
    };
    Validator.executeValidator = function (validatorFunc, childKey, value) {
        return __awaiter(this, void 0, void 0, function () {
            var e_2, _a, errors, value_1, value_1_1, currentValue, _b, _c, _d, e_2_1;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        if (!!Array.isArray(value)) return [3, 2];
                        return [4, this.executeValidatorSingle(validatorFunc, childKey, value)];
                    case 1: return [2, _e.sent()];
                    case 2:
                        errors = [];
                        _e.label = 3;
                    case 3:
                        _e.trys.push([3, 8, 9, 10]);
                        value_1 = __values(value), value_1_1 = value_1.next();
                        _e.label = 4;
                    case 4:
                        if (!!value_1_1.done) return [3, 7];
                        currentValue = value_1_1.value;
                        _c = (_b = immunity).mergeArrays;
                        _d = [errors];
                        return [4, this.executeValidatorSingle(validatorFunc, childKey, currentValue)];
                    case 5:
                        errors = _c.apply(_b, _d.concat([_e.sent()]));
                        _e.label = 6;
                    case 6:
                        value_1_1 = value_1.next();
                        return [3, 4];
                    case 7: return [3, 10];
                    case 8:
                        e_2_1 = _e.sent();
                        e_2 = { error: e_2_1 };
                        return [3, 10];
                    case 9:
                        try {
                            if (value_1_1 && !value_1_1.done && (_a = value_1.return)) _a.call(value_1);
                        }
                        finally { if (e_2) throw e_2.error; }
                        return [7];
                    case 10: return [2, errors];
                }
            });
        });
    };
    Validator.prepareValue = function (value, childKey, child) {
        return __awaiter(this, void 0, void 0, function () {
            var e_3, _a, errors, newValue, length, newValue_1, newValue_1_1, currentValue, _b, _c, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        errors = [], newValue = value;
                        length = value.length;
                        if (child.type === Types_1.default.booleanParameter) {
                            if (length > 1) {
                                errors = immunity.appendToArray(errors, { error: "many occurences for " + childKey });
                            }
                            newValue = newValue[0];
                            if (newValue !== undefined) {
                                if (newValue.constructor !== Boolean) {
                                    errors = immunity.appendToArray(errors, { error: "invalid boolean value for " + childKey + ": " + newValue });
                                }
                            }
                        }
                        else {
                            if (child.values !== undefined) {
                                try {
                                    for (newValue_1 = __values(newValue), newValue_1_1 = newValue_1.next(); !newValue_1_1.done; newValue_1_1 = newValue_1.next()) {
                                        currentValue = newValue_1_1.value;
                                        if (child.values.indexOf(currentValue) === -1) {
                                            errors = immunity.appendToArray(errors, { error: "invalid value for " + childKey + ": " + currentValue });
                                        }
                                    }
                                }
                                catch (e_3_1) { e_3 = { error: e_3_1 }; }
                                finally {
                                    try {
                                        if (newValue_1_1 && !newValue_1_1.done && (_a = newValue_1.return)) _a.call(newValue_1);
                                    }
                                    finally { if (e_3) throw e_3.error; }
                                }
                            }
                            if (child.max !== undefined) {
                                if (length > child.max) {
                                    errors = immunity.appendToArray(errors, { error: "maximum length violation for " + childKey });
                                }
                                if (child.max <= 1) {
                                    newValue = newValue[0];
                                }
                            }
                        }
                        if (child.min > length) {
                            errors = immunity.appendToArray(errors, { error: "minimum length violation for " + childKey });
                        }
                        if (!(child.validate !== undefined)) return [3, 2];
                        _c = (_b = immunity).mergeArrays;
                        _d = [errors];
                        return [4, this.executeValidator(child.validate, childKey, newValue)];
                    case 1:
                        errors = _c.apply(_b, _d.concat([_e.sent()]));
                        _e.label = 2;
                    case 2: return [2, {
                            value: newValue,
                            errors: (errors.length > 0) ? errors : undefined
                        }];
                }
            });
        });
    };
    Validator.prototype.processSingleParameter = function (childKey, child, argv) {
        return __awaiter(this, void 0, void 0, function () {
            var e_4, _a, argvRemainder, errors, values, argvKeys, argvKeys_1, argvKeys_1_1, argvKey, valueResult;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        argvRemainder = argv;
                        argvKeys = Validator.getArgvKeys(child, childKey, function (key) { return key in argvRemainder; });
                        if (!(argvKeys.length > 0)) return [3, 2];
                        values = [];
                        try {
                            for (argvKeys_1 = __values(argvKeys), argvKeys_1_1 = argvKeys_1.next(); !argvKeys_1_1.done; argvKeys_1_1 = argvKeys_1.next()) {
                                argvKey = argvKeys_1_1.value;
                                if (Array.isArray(argvRemainder[argvKey])) {
                                    values = immunity.mergeArrays(values, argvRemainder[argvKey]);
                                }
                                else {
                                    values = immunity.appendToArray(values, argvRemainder[argvKey]);
                                }
                                argvRemainder = immunity.removeKeyFromObject(argvRemainder, argvKey);
                            }
                        }
                        catch (e_4_1) { e_4 = { error: e_4_1 }; }
                        finally {
                            try {
                                if (argvKeys_1_1 && !argvKeys_1_1.done && (_a = argvKeys_1.return)) _a.call(argvKeys_1);
                            }
                            finally { if (e_4) throw e_4.error; }
                        }
                        return [4, Validator.prepareValue(values, childKey, child)];
                    case 1:
                        valueResult = _b.sent();
                        values = valueResult.value;
                        errors = valueResult.errors;
                        return [3, 3];
                    case 2:
                        if (child.default !== undefined) {
                            values = child.default;
                        }
                        _b.label = 3;
                    case 3: return [2, {
                            values: values,
                            errors: errors,
                            argvRemainder: argvRemainder
                        }];
                }
            });
        });
    };
    Validator.prototype.processParameters = function (children, argv) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, argvRemainder, values, errors, _c, _d, _i, childKey, child, result;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        argvRemainder = argv, values = {}, errors = {};
                        _c = [];
                        for (_d in children)
                            _c.push(_d);
                        _i = 0;
                        _e.label = 1;
                    case 1:
                        if (!(_i < _c.length)) return [3, 4];
                        childKey = _c[_i];
                        child = children[childKey];
                        if (child.type === Types_1.default.command) {
                            return [3, 3];
                        }
                        return [4, this.processSingleParameter(childKey, child, argvRemainder)];
                    case 2:
                        result = _e.sent();
                        argvRemainder = result.argvRemainder;
                        if (result.values !== undefined) {
                            values = immunity.appendToObject(values, (_a = {}, _a[childKey] = result.values, _a));
                        }
                        if (result.errors !== undefined) {
                            errors = immunity.appendToObject(errors, (_b = {}, _b[childKey] = result.errors, _b));
                        }
                        _e.label = 3;
                    case 3:
                        _i++;
                        return [3, 1];
                    case 4: return [2, {
                            values: values,
                            errors: errors,
                            argvRemainder: argvRemainder
                        }];
                }
            });
        });
    };
    Validator.prototype.processSingleCommand = function (childKey, child, argv) {
        var e_5, _a;
        var argvRemainder = argv;
        var argvKeys = Validator.getArgvKeys(child, childKey, function (key) { return argvRemainder._.indexOf(key) >= 0; });
        try {
            for (var argvKeys_2 = __values(argvKeys), argvKeys_2_1 = argvKeys_2.next(); !argvKeys_2_1.done; argvKeys_2_1 = argvKeys_2.next()) {
                var argvKey = argvKeys_2_1.value;
                if (argvKey === argvRemainder._[0]) {
                    return {
                        commandKey: childKey,
                        argvRemainder: argvRemainder
                    };
                }
            }
        }
        catch (e_5_1) { e_5 = { error: e_5_1 }; }
        finally {
            try {
                if (argvKeys_2_1 && !argvKeys_2_1.done && (_a = argvKeys_2.return)) _a.call(argvKeys_2);
            }
            finally { if (e_5) throw e_5.error; }
        }
        return {
            commandKey: undefined,
            argvRemainder: argvRemainder
        };
    };
    Validator.prototype.processCommands = function (children, argv) {
        var argvRemainder = argv, commandKey;
        if (argvRemainder._ !== undefined) {
            for (var childKey in children) {
                var child = children[childKey];
                if (child.type !== Types_1.default.command) {
                    continue;
                }
                var result = this.processSingleCommand(childKey, child, argvRemainder);
                argvRemainder = result.argvRemainder;
                if (result.commandKey !== undefined) {
                    commandKey = result.commandKey;
                    break;
                }
            }
            if (commandKey !== undefined) {
                argvRemainder = assign_1.default({}, argvRemainder, { _: argvRemainder._.slice(1) });
            }
        }
        return {
            commandKey: commandKey,
            argvRemainder: argvRemainder
        };
    };
    Validator.prototype.validateSingle = function (rule, argv) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, commandId, children, argvRemainder, values, errors, result1, result2, command, result3;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4, Rule_1.getRuleChildren(rule)];
                    case 1:
                        children = _b.sent();
                        argvRemainder = argv, values = {}, errors = {};
                        if (!(children !== undefined)) return [3, 4];
                        return [4, this.processParameters(children, argvRemainder)];
                    case 2:
                        result1 = _b.sent();
                        values = immunity.mergeObjects(values, result1.values);
                        errors = immunity.mergeObjects(errors, result1.errors);
                        argvRemainder = result1.argvRemainder;
                        result2 = this.processCommands(children, argvRemainder);
                        if (!(result2.commandKey !== undefined)) return [3, 4];
                        command = children[result2.commandKey];
                        commandId = command.id;
                        return [4, this.validateSingle(command, result2.argvRemainder)];
                    case 3:
                        result3 = _b.sent();
                        if (result3.commandId !== undefined) {
                            commandId = result3.commandId;
                        }
                        argvRemainder = result3.argvRemainder;
                        values = immunity.appendToObject(values, (_a = {},
                            _a[result2.commandKey] = result3.values,
                            _a));
                        _b.label = 4;
                    case 4: return [2, {
                            commandId: commandId,
                            values: values,
                            errors: errors,
                            argvRemainder: argvRemainder
                        }];
                }
            });
        });
    };
    Validator.prototype.validate = function (rules, argv) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.validateSingle(rules, argv)];
                    case 1:
                        result = _a.sent();
                        return [2, {
                                commandId: result.commandId,
                                values: result.values,
                                errors: result.errors,
                                isValid: Object.keys(result.errors).length === 0,
                                isCancelled: false
                            }];
                }
            });
        });
    };
    return Validator;
}());
exports.default = Validator;
//# sourceMappingURL=Validator.js.map