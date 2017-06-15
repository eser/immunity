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
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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
Object.defineProperty(exports, "__esModule", { value: true });
var immunity = require("immunity");
var Rule_1 = require("./Rule");
var Types_1 = require("./Types");
var Validator = (function () {
    function Validator() {
    }
    Validator.getArgvKeys = function (rule, key, condition) {
        var keys = [];
        if (condition(key)) {
            keys = immunity.appendToArray(keys, key);
        }
        if (rule.aliases !== undefined) {
            for (var _i = 0, _a = rule.aliases; _i < _a.length; _i++) {
                var alias = _a[_i];
                if (condition(alias)) {
                    keys = immunity.appendToArray(keys, alias);
                }
            }
        }
        return keys;
    };
    Validator.prepareValue = function (value, childKey, child) {
        var errors = [], newValue = value;
        var length = value.length;
        if (child.type === Types_1.Types.booleanParameter) {
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
                for (var _i = 0, newValue_1 = newValue; _i < newValue_1.length; _i++) {
                    var currentValue = newValue_1[_i];
                    if (child.values.indexOf(currentValue) === -1) {
                        errors = immunity.appendToArray(errors, { error: "invalid value for " + childKey + ": " + currentValue });
                    }
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
        if (child.validate !== undefined) {
            newValue.forEach(function (currentValue) {
                var validationMethodResult = child.validate(currentValue);
                if (validationMethodResult !== true) {
                    errors = immunity.appendToArray(errors, { error: "validation failed for " + childKey + ". value is \"" + currentValue + "\": " + validationMethodResult });
                }
            });
        }
        return {
            value: newValue,
            errors: (errors.length > 0) ? errors : undefined
        };
    };
    Validator.prototype.processSingleParameter = function (childKey, child, argv) {
        var argvRemainder = argv, errors, values;
        var argvKeys = Validator.getArgvKeys(child, childKey, function (key) { return key in argvRemainder; });
        if (argvKeys.length > 0) {
            values = [];
            for (var _i = 0, argvKeys_1 = argvKeys; _i < argvKeys_1.length; _i++) {
                var argvKey = argvKeys_1[_i];
                if (Array.isArray(argvRemainder[argvKey])) {
                    values = values.concat(argvRemainder[argvKey]);
                }
                else {
                    values = immunity.appendToArray(values, argvRemainder[argvKey]);
                }
                argvRemainder = immunity.removeKeyFromObject(argvRemainder, argvKey);
            }
            var valueResult = Validator.prepareValue(values, childKey, child);
            values = valueResult.value;
            errors = valueResult.errors;
        }
        else if (child.default !== undefined) {
            values = child.default;
        }
        return {
            values: values,
            errors: errors,
            argvRemainder: argvRemainder
        };
    };
    Validator.prototype.processParameters = function (children, argv) {
        var argvRemainder = argv, values = {}, errors = {};
        for (var childKey in children) {
            var child = children[childKey];
            if (child.type === Types_1.Types.command) {
                continue;
            }
            var result = this.processSingleParameter(childKey, child, argvRemainder);
            argvRemainder = result.argvRemainder;
            if (result.values !== undefined) {
                values = immunity.appendToObject(values, (_a = {}, _a[childKey] = result.values, _a));
            }
            if (result.errors !== undefined) {
                errors = immunity.appendToObject(errors, (_b = {}, _b[childKey] = result.errors, _b));
            }
        }
        return {
            values: values,
            errors: errors,
            argvRemainder: argvRemainder
        };
        var _a, _b;
    };
    Validator.prototype.processSingleCommand = function (childKey, child, argv) {
        var argvRemainder = argv;
        var argvKeys = Validator.getArgvKeys(child, childKey, function (key) { return argvRemainder._.indexOf(key) >= 0; });
        for (var _i = 0, argvKeys_2 = argvKeys; _i < argvKeys_2.length; _i++) {
            var argvKey = argvKeys_2[_i];
            if (argvKey === argvRemainder._[0]) {
                return {
                    commandKey: childKey,
                    argvRemainder: argvRemainder
                };
            }
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
                if (child.type !== Types_1.Types.command) {
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
                argvRemainder = Object.assign({}, argvRemainder, { _: argvRemainder._.slice(1) });
            }
        }
        return {
            commandKey: commandKey,
            argvRemainder: argvRemainder
        };
    };
    Validator.prototype.validateSingle = function (rule, argv) {
        return __awaiter(this, void 0, void 0, function () {
            var commandId, children, argvRemainder, values, errors, result1, result2, command, result3, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4, Rule_1.getRuleChildren(rule)];
                    case 1:
                        children = _b.sent();
                        argvRemainder = argv, values = {}, errors = {};
                        if (!(children !== undefined)) return [3, 3];
                        result1 = this.processParameters(children, argvRemainder);
                        values = immunity.mergeObjects(values, result1.values);
                        errors = immunity.mergeObjects(errors, result1.errors);
                        argvRemainder = result1.argvRemainder;
                        result2 = this.processCommands(children, argvRemainder);
                        if (!(result2.commandKey !== undefined)) return [3, 3];
                        command = children[result2.commandKey];
                        commandId = command.id;
                        return [4, this.validateSingle(command, result2.argvRemainder)];
                    case 2:
                        result3 = _b.sent();
                        if (result3.commandId !== undefined) {
                            commandId = result3.commandId;
                        }
                        argvRemainder = result3.argvRemainder;
                        values = immunity.appendToObject(values, (_a = {},
                            _a[result2.commandKey] = result3.values,
                            _a));
                        _b.label = 3;
                    case 3: return [2, {
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
exports.Validator = Validator;
exports.default = Validator;
//# sourceMappingURL=Validator.js.map