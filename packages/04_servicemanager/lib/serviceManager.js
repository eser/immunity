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
var __read = (this && this.__read) || function (o, n) {
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
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var serviceDefinitionCollection_1 = require("./serviceDefinitionCollection");
var serviceLifetime_1 = require("./serviceLifetime");
var get_1 = require("./methods/get");
var getRange_1 = require("./methods/getRange");
var getOrResolve_1 = require("./methods/getOrResolve");
var getOrResolveRange_1 = require("./methods/getOrResolveRange");
var set_1 = require("./methods/set");
var setRange_1 = require("./methods/setRange");
var ensure_1 = require("./methods/ensure");
var all_1 = require("./methods/all");
var filter_1 = require("./methods/filter");
var filterByTag_1 = require("./methods/filterByTag");
var ServiceManager = (function () {
    function ServiceManager(resolver) {
        this.items = serviceDefinitionCollection_1.createServiceDefinitionCollection();
        this.resolver = resolver;
    }
    ServiceManager.prototype.set = function (dependency, target, lifetime, tags) {
        if (lifetime === void 0) { lifetime = serviceLifetime_1.default.Transient; }
        if (tags === void 0) { tags = []; }
        var result = set_1.default(this.items, dependency, target, lifetime, tags);
        this.items = result.newCollection;
    };
    ServiceManager.prototype.setRange = function () {
        var declarations = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            declarations[_i] = arguments[_i];
        }
        var result = setRange_1.default.apply(void 0, __spread([this.items], declarations));
        this.items = result.newCollection;
    };
    ServiceManager.prototype.get = function (dependency) {
        return get_1.default(this.items, dependency);
    };
    ServiceManager.prototype.getRange = function () {
        var dependencies = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            dependencies[_i] = arguments[_i];
        }
        return getRange_1.default.apply(void 0, __spread([this.items], dependencies));
    };
    ServiceManager.prototype.getOrResolve = function (dependency) {
        var result = getOrResolve_1.default(this.items, this.resolver, dependency);
        if (result.isChanged) {
            this.items = result.newCollection;
        }
        return result.result;
    };
    ServiceManager.prototype.getOrResolveRange = function () {
        var dependencies = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            dependencies[_i] = arguments[_i];
        }
        var result = getOrResolveRange_1.default.apply(void 0, __spread([this.items, this.resolver], dependencies));
        if (result.isChanged) {
            this.items = result.newCollection;
        }
        return result.result;
    };
    ServiceManager.prototype.ensure = function (dependencies, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, ensure_1.default(this.items, dependencies, callback, this.resolver)];
                    case 1:
                        result = _a.sent();
                        if (result.isChanged) {
                            this.items = result.newCollection;
                        }
                        return [2, result.result];
                }
            });
        });
    };
    ServiceManager.prototype.all = function () {
        return all_1.default(this.items);
    };
    ServiceManager.prototype.filter = function (predicate) {
        return filter_1.default(this.items, predicate);
    };
    ServiceManager.prototype.filterByTag = function (tag) {
        return filterByTag_1.default(this.items, tag);
    };
    return ServiceManager;
}());
exports.default = ServiceManager;
//# sourceMappingURL=serviceManager.js.map