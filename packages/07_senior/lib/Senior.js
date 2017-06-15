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
var path = require("path");
var os = require("os");
var cofounder = require("cofounder");
var EventEmitter = require("es6-eventemitter");
var immunity = require("immunity");
var Senior = (function () {
    function Senior(name, modulePrefix) {
        if (modulePrefix === void 0) { modulePrefix = ''; }
        this.name = name;
        this.modulePrefix = modulePrefix;
        this.events = new EventEmitter();
        this.homePath = path.join(os.homedir(), "." + this.name);
        this.packageJsonFile = path.join(this.homePath, 'package.json');
    }
    Senior.prototype.ensureRequirements = function () {
        return __awaiter(this, void 0, void 0, function () {
            var ex_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, cofounder.fs.mkdirP(this.homePath)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 7]);
                        return [4, cofounder.fs.lstat(this.packageJsonFile)];
                    case 3:
                        _a.sent();
                        return [3, 7];
                    case 4:
                        ex_1 = _a.sent();
                        if (!(ex_1.code === 'ENOENT')) return [3, 6];
                        return [4, cofounder.json.saveFile(this.packageJsonFile, {})];
                    case 5:
                        _a.sent();
                        _a.label = 6;
                    case 6: return [3, 7];
                    case 7: return [2];
                }
            });
        });
    };
    Senior.prototype.list = function () {
        var dependencies = {};
        try {
            var packageJson = require(this.packageJsonFile);
            if (packageJson.dependencies !== undefined) {
                dependencies = immunity.mergeObjects(dependencies, packageJson.dependencies);
            }
        }
        catch (ex) {
            if (ex.code !== 'MODULE_NOT_FOUND') {
                throw ex;
            }
        }
        return dependencies;
    };
    Senior.prototype.install = function (moduleName) {
        return __awaiter(this, void 0, void 0, function () {
            var moduleName_, proc;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.ensureRequirements()];
                    case 1:
                        _a.sent();
                        moduleName_ = "" + this.modulePrefix + moduleName;
                        proc = cofounder.os.shell("npm install " + moduleName_ + " --prefix " + this.homePath);
                        if (proc.status === 0) {
                            this.events.emit('install', moduleName_);
                            return [2, true];
                        }
                        return [2, false];
                }
            });
        });
    };
    Senior.prototype.uninstall = function (moduleName) {
        return __awaiter(this, void 0, void 0, function () {
            var moduleName_, proc;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.ensureRequirements()];
                    case 1:
                        _a.sent();
                        moduleName_ = "" + this.modulePrefix + moduleName;
                        proc = cofounder.os.shell("npm uninstall " + moduleName_ + " --prefix " + this.homePath);
                        if (proc.status === 0) {
                            this.events.emit('uninstall', moduleName_);
                            return [2, true];
                        }
                        return [2, false];
                }
            });
        });
    };
    Senior.prototype.getModulePath = function (moduleName) {
        return path.join(this.homePath, 'node_modules', moduleName);
    };
    Senior.prototype.getModuleIndex = function (moduleName) {
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
    Senior.prototype.getModules = function () {
        var list = this.list();
        var result = {};
        for (var _i = 0, _a = Object.keys(list); _i < _a.length; _i++) {
            var dependencyKey = _a[_i];
            result = immunity.appendToObject(result, (_b = {}, _b[dependencyKey] = this.getModuleIndex(dependencyKey), _b));
        }
        return result;
        var _b;
    };
    Senior.prototype.load = function (moduleName, globals) {
        var moduleIndex = this.getModuleIndex(moduleName);
        var gBackups = {};
        for (var _i = 0, _a = Object.keys(globals); _i < _a.length; _i++) {
            var globalKey = _a[_i];
            gBackups = immunity.appendToObject(gBackups, (_b = {}, _b[globalKey] = global[globalKey], _b));
            global[globalKey] = globals[globalKey];
        }
        try {
            var loadedModule = require(moduleIndex);
            return loadedModule;
        }
        catch (ex) {
            if (ex.code !== 'MODULE_NOT_FOUND') {
                throw ex;
            }
        }
        finally {
            for (var _c = 0, _d = Object.keys(globals); _c < _d.length; _c++) {
                var globalKey = _d[_c];
                global[globalKey] = gBackups[globalKey];
            }
        }
        return null;
        var _b;
    };
    Senior.prototype.loadAll = function (globals) {
        var list = this.list();
        var result = {};
        for (var _i = 0, _a = Object.keys(list); _i < _a.length; _i++) {
            var dependencyKey = _a[_i];
            result = immunity.appendToObject(result, (_b = {}, _b[dependencyKey] = this.load(dependencyKey, globals), _b));
        }
        return result;
        var _b;
    };
    return Senior;
}());
exports.Senior = Senior;
exports.default = Senior;
//# sourceMappingURL=Senior.js.map