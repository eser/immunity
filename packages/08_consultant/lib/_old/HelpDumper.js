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
var colors = require("colors/safe");
var Rule_1 = require("./Rule");
var Types_1 = require("./Types");
var alignedString_1 = require("./utils/alignedString");
var tabstops = [0, 35];
var HelpDumper = (function () {
    function HelpDumper() {
    }
    HelpDumper.prototype.dumpCommands = function (children, stream, indentation) {
        return __awaiter(this, void 0, void 0, function () {
            var e_1, _a, lines, _b, _c, _i, childKey, child, lineOutput, _d, _e, alias, _f;
            return __generator(this, function (_g) {
                switch (_g.label) {
                    case 0:
                        lines = 0;
                        _b = [];
                        for (_c in children)
                            _b.push(_c);
                        _i = 0;
                        _g.label = 1;
                    case 1:
                        if (!(_i < _b.length)) return [3, 4];
                        childKey = _b[_i];
                        child = children[childKey];
                        if (child.helpHidden) {
                            return [3, 3];
                        }
                        if (child.type !== Types_1.default.command) {
                            return [3, 3];
                        }
                        if (lines === 0) {
                            stream.write("" + indentation + colors.white('Commands:') + "\n");
                        }
                        lines += 1;
                        lineOutput = "" + childKey;
                        if (child.aliases !== undefined) {
                            try {
                                for (_d = __values(child.aliases), _e = _d.next(); !_e.done; _e = _d.next()) {
                                    alias = _e.value;
                                    lineOutput += ", " + alias;
                                }
                            }
                            catch (e_1_1) { e_1 = { error: e_1_1 }; }
                            finally {
                                try {
                                    if (_e && !_e.done && (_a = _d.return)) _a.call(_d);
                                }
                                finally { if (e_1) throw e_1.error; }
                            }
                        }
                        if (child.parameter !== undefined) {
                            lineOutput += " " + child.parameter;
                        }
                        stream.write("" + indentation + alignedString_1.default([
                            tabstops[0] - indentation.length, colors.gray(lineOutput),
                            tabstops[1] - indentation.length, colors.gray(child.description)
                        ]) + "\n");
                        if (!child.helpDetails) return [3, 3];
                        _f = lines;
                        return [4, this.dumpSingle(child, stream, indentation + "    ")];
                    case 2:
                        lines = _f + _g.sent();
                        _g.label = 3;
                    case 3:
                        _i++;
                        return [3, 1];
                    case 4: return [2, lines];
                }
            });
        });
    };
    HelpDumper.prototype.dumpParameters = function (children, stream, indentation) {
        var e_2, _a;
        var lines = 0;
        for (var childKey in children) {
            var child = children[childKey];
            if (child.helpHidden) {
                continue;
            }
            if (child.type === Types_1.default.command) {
                continue;
            }
            if (lines === 0) {
                stream.write("" + indentation + colors.white('Options:') + "\n");
            }
            lines += 1;
            var lineOutput = "" + ((childKey.length > 1) ? '--' : '-') + childKey;
            if (child.aliases !== undefined) {
                try {
                    for (var _b = __values(child.aliases), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var alias = _c.value;
                        lineOutput += ", " + ((alias.length > 1) ? '--' : '-') + alias;
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
            }
            if (child.parameter !== undefined) {
                lineOutput += " " + child.parameter;
            }
            stream.write("" + indentation + alignedString_1.default([
                tabstops[0] - indentation.length, colors.gray(lineOutput),
                tabstops[1] - indentation.length, colors.gray(child.description)
            ]) + "\n");
        }
        return lines;
    };
    HelpDumper.prototype.dumpSingle = function (rule, stream, indentation) {
        return __awaiter(this, void 0, void 0, function () {
            var lines, children, parameterLines, commandLines;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        lines = 0;
                        return [4, Rule_1.getRuleChildren(rule)];
                    case 1:
                        children = _a.sent();
                        if (!(children !== undefined)) return [3, 3];
                        parameterLines = this.dumpParameters(children, stream, indentation);
                        if (parameterLines > 0) {
                            stream.write('\n');
                            lines += parameterLines;
                        }
                        return [4, this.dumpCommands(children, stream, indentation)];
                    case 2:
                        commandLines = _a.sent();
                        if (commandLines > 0) {
                            stream.write('\n');
                            lines += commandLines;
                        }
                        _a.label = 3;
                    case 3:
                        if (lines === 0) {
                            stream.write(colors.gray('No options are available.') + "\n\n");
                            lines += 2;
                        }
                        return [2, lines];
                }
            });
        });
    };
    HelpDumper.prototype.dump = function (rules, stream, indentation) {
        if (indentation === void 0) { indentation = ''; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (rules.label !== undefined) {
                            stream.write("" + indentation + rules.label + "\n");
                            stream.write("" + indentation + '='.repeat(rules.label.length) + "\n");
                            stream.write('\n');
                            if (rules.description !== undefined) {
                                stream.write("" + indentation + rules.description + "\n");
                                stream.write('\n\n');
                            }
                        }
                        return [4, this.dumpSingle(rules, stream, indentation)];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    return HelpDumper;
}());
exports.default = HelpDumper;
//# sourceMappingURL=HelpDumper.js.map