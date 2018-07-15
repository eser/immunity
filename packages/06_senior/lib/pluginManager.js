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
var path = require("path");
var os = require("os");
var emitter_1 = require("evangelist/lib/emitter");
var mkdirP_1 = require("cofounder/lib/fs/mkdirP");
var lstat_1 = require("cofounder/lib/fs/lstat");
var saveFile_1 = require("cofounder/lib/json/saveFile");
var shell_1 = require("cofounder/lib/os/shell");
var mergeObjects_1 = require("immunity/lib/mergeObjects");
var appendToObject_1 = require("immunity/lib/appendToObject");
var PluginManager = (function () {
    function PluginManager(name, modulePrefix) {
        if (modulePrefix === void 0) { modulePrefix = ''; }
        this.name = name;
        this.modulePrefix = modulePrefix;
        this.events = {
            install: [],
            uninstall: [],
        };
        this.homePath = path.join(os.homedir(), "." + this.name);
        this.packageJsonFile = path.join(this.homePath, 'package.json');
    }
    PluginManager.prototype.ensureRequirements = function () {
        return __awaiter(this, void 0, void 0, function () {
            var ex_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, mkdirP_1.default(this.homePath)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 7]);
                        return [4, lstat_1.default(this.packageJsonFile)];
                    case 3:
                        _a.sent();
                        return [3, 7];
                    case 4:
                        ex_1 = _a.sent();
                        if (!(ex_1.code === 'ENOENT')) return [3, 6];
                        return [4, saveFile_1.default(this.packageJsonFile, {})];
                    case 5:
                        _a.sent();
                        _a.label = 6;
                    case 6: return [3, 7];
                    case 7: return [2];
                }
            });
        });
    };
    PluginManager.prototype.list = function () {
        var dependencies = {};
        try {
            var packageJson = require(this.packageJsonFile);
            if (packageJson.dependencies !== undefined) {
                dependencies = mergeObjects_1.default(dependencies, packageJson.dependencies);
            }
        }
        catch (ex) {
            if (ex.code !== 'MODULE_NOT_FOUND') {
                throw ex;
            }
        }
        return dependencies;
    };
    PluginManager.prototype.install = function (moduleName) {
        return __awaiter(this, void 0, void 0, function () {
            var moduleName_, proc;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.ensureRequirements()];
                    case 1:
                        _a.sent();
                        moduleName_ = "" + this.modulePrefix + moduleName;
                        proc = shell_1.default("npm install " + moduleName_ + " --prefix " + this.homePath);
                        if (!(proc.status === 0)) return [3, 3];
                        return [4, emitter_1.default(this.events, 'install', [moduleName_])];
                    case 2:
                        _a.sent();
                        return [2, true];
                    case 3: return [2, false];
                }
            });
        });
    };
    PluginManager.prototype.uninstall = function (moduleName) {
        return __awaiter(this, void 0, void 0, function () {
            var moduleName_, proc;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.ensureRequirements()];
                    case 1:
                        _a.sent();
                        moduleName_ = "" + this.modulePrefix + moduleName;
                        proc = shell_1.default("npm uninstall " + moduleName_ + " --prefix " + this.homePath);
                        if (!(proc.status === 0)) return [3, 3];
                        return [4, emitter_1.default(this.events, 'uninstall', [moduleName_])];
                    case 2:
                        _a.sent();
                        return [2, true];
                    case 3: return [2, false];
                }
            });
        });
    };
    PluginManager.prototype.getModulePath = function (moduleName) {
        return path.join(this.homePath, 'node_modules', moduleName);
    };
    PluginManager.prototype.getModuleIndex = function (moduleName) {
        var pathstr = this.getModulePath(moduleName), modulePackage = path.join(pathstr, 'package.json');
        try {
            var contents = require(modulePackage), entryPoint = contents["main:" + this.name];
            if (entryPoint !== undefined) {
                return path.join(pathstr, entryPoint);
            }
        }
        catch (ex) {
            if (ex.code !== 'MODULE_NOT_FOUND') {
                throw ex;
            }
        }
        return pathstr;
    };
    PluginManager.prototype.getModules = function () {
        var e_1, _a, _b;
        var list = this.list();
        var result = {};
        try {
            for (var _c = __values(Object.keys(list)), _d = _c.next(); !_d.done; _d = _c.next()) {
                var dependencyKey = _d.value;
                result = appendToObject_1.default(result, (_b = {},
                    _b[dependencyKey] = this.getModuleIndex(dependencyKey),
                    _b));
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return result;
    };
    PluginManager.prototype.loadFile = function (filepath, globals) {
        var e_2, _a, _b, e_3, _c;
        var gBackups = {};
        try {
            for (var _d = __values(Object.keys(globals)), _e = _d.next(); !_e.done; _e = _d.next()) {
                var globalKey = _e.value;
                gBackups = appendToObject_1.default(gBackups, (_b = {}, _b[globalKey] = global[globalKey], _b));
                global[globalKey] = globals[globalKey];
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_e && !_e.done && (_a = _d.return)) _a.call(_d);
            }
            finally { if (e_2) throw e_2.error; }
        }
        try {
            var loadedModule = require(filepath);
            return loadedModule;
        }
        catch (ex) {
            if (ex.code !== 'MODULE_NOT_FOUND') {
                throw ex;
            }
        }
        finally {
            try {
                for (var _f = __values(Object.keys(globals)), _g = _f.next(); !_g.done; _g = _f.next()) {
                    var globalKey = _g.value;
                    global[globalKey] = gBackups[globalKey];
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (_g && !_g.done && (_c = _f.return)) _c.call(_f);
                }
                finally { if (e_3) throw e_3.error; }
            }
        }
        return null;
    };
    PluginManager.prototype.load = function (moduleName, globals, loader) {
        if (loader === void 0) { loader = this.loadFile; }
        var moduleIndex = this.getModuleIndex(moduleName);
        return loader(moduleIndex, globals);
    };
    PluginManager.prototype.loadAll = function (globals, loader) {
        if (loader === void 0) { loader = this.loadFile; }
        var e_4, _a, _b;
        var list = this.list();
        var result = {};
        try {
            for (var _c = __values(Object.keys(list)), _d = _c.next(); !_d.done; _d = _c.next()) {
                var dependencyKey = _d.value;
                result = appendToObject_1.default(result, (_b = {},
                    _b[dependencyKey] = this.load(dependencyKey, globals, loader),
                    _b));
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_4) throw e_4.error; }
        }
        return result;
    };
    return PluginManager;
}());
exports.default = PluginManager;
//# sourceMappingURL=pluginManager.js.map