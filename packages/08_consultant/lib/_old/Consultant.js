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
Object.defineProperty(exports, "__esModule", { value: true });
var ArgsParser_1 = require("./ArgsParser");
var Types_1 = require("./Types");
var Consultation_1 = require("./Consultation");
var HelpDumper_1 = require("./HelpDumper");
var Rule_1 = require("./Rule");
var Consultant = (function () {
    function Consultant(rules) {
        this.rules = rules;
    }
    Consultant.prototype.fromObject = function (argv) {
        return __awaiter(this, void 0, void 0, function () {
            var consultation;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        consultation = new Consultation_1.default(this.rules, argv);
                        return [4, consultation.validate()];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    Consultant.prototype.fromString = function (args) {
        return __awaiter(this, void 0, void 0, function () {
            var argv;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        argv = ArgsParser_1.default.parse(args);
                        return [4, this.fromObject(argv)];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    Consultant.prototype.fromCommandLine = function () {
        return __awaiter(this, void 0, void 0, function () {
            var args;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        args = process.argv.slice(2).join(' ');
                        return [4, this.fromString(args)];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    Consultant.prototype.fromInquiry = function () {
        return __awaiter(this, void 0, void 0, function () {
            var consultation;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        consultation = new Consultation_1.default(this.rules);
                        return [4, consultation.inquire()];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    Consultant.getRuleInternal = function (predicate, node) {
        return __awaiter(this, void 0, void 0, function () {
            var children, _a, _b, _i, childKey, child, result;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4, Rule_1.getRuleChildren(node)];
                    case 1:
                        children = _c.sent();
                        if (!(children !== undefined)) return [3, 5];
                        _a = [];
                        for (_b in children)
                            _a.push(_b);
                        _i = 0;
                        _c.label = 2;
                    case 2:
                        if (!(_i < _a.length)) return [3, 5];
                        childKey = _a[_i];
                        child = children[childKey];
                        if (predicate(childKey, child)) {
                            return [2, child];
                        }
                        if (!(child.children !== undefined || child.getChildren !== undefined)) return [3, 4];
                        return [4, Consultant.getRuleInternal(predicate, child)];
                    case 3:
                        result = _c.sent();
                        if (result !== undefined) {
                            return [2, result];
                        }
                        _c.label = 4;
                    case 4:
                        _i++;
                        return [3, 2];
                    case 5: return [2, undefined];
                }
            });
        });
    };
    Consultant.prototype.getRule = function (predicate) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, Consultant.getRuleInternal(predicate, this.rules)];
            });
        });
    };
    Consultant.prototype.getRuleById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.getRule(function (key, rule) { return rule.id === id; })];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    Consultant.prototype.help = function () {
        return __awaiter(this, void 0, void 0, function () {
            var dumper;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        dumper = new HelpDumper_1.default();
                        return [4, dumper.dump(this.rules, process.stdout)];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    Consultant.prototype.helpForId = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var rule, dumper;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.getRuleById(id)];
                    case 1:
                        rule = _a.sent(), dumper = new HelpDumper_1.default();
                        if (rule === undefined) {
                            throw new Error("rule id '" + id + "' is not found.");
                        }
                        return [4, dumper.dump(rule, process.stdout)];
                    case 2:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    Consultant.types = Types_1.default;
    return Consultant;
}());
exports.default = Consultant;
//# sourceMappingURL=Consultant.js.map