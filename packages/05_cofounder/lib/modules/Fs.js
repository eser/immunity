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
var fs = require("fs");
var path = require("path");
var immunity = require("immunity");
var globParentLib = require("glob-parent");
var globAll = require("glob-all");
var Fs = (function () {
    function Fs() {
    }
    Fs.prototype.globParent = function (str) {
        return globParentLib(str);
    };
    Fs.prototype.globParentOf = function (str, pathstr) {
        var str_ = Array.isArray(str) ? str : [str];
        for (var _i = 0, str_1 = str_; _i < str_1.length; _i++) {
            var strItem = str_1[_i];
            if (strItem[0] === '!') {
                continue;
            }
            var strItemParent = globParentLib(strItem);
            if ((pathstr.length > strItemParent.length) &&
                (pathstr.substring(0, strItemParent.length) === strItemParent)) {
                return strItemParent;
            }
        }
        return null;
    };
    Fs.prototype.readdir = function (pathstr, options) {
        return new Promise(function (resolve, reject) {
            var defaultOptions = { encoding: 'utf8' };
            var options_ = (options === undefined) ?
                defaultOptions :
                immunity.appendToObject(options, defaultOptions);
            fs.readdir(pathstr, options_, function (err, contents) {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(contents);
            });
        });
    };
    Fs.prototype.glob = function (str, options) {
        return new Promise(function (resolve, reject) {
            var defaultOptions = {
                nosort: true,
                nonull: false,
                nodir: true
            };
            var options_ = (options === undefined) ?
                defaultOptions :
                immunity.appendToObject(options, defaultOptions);
            globAll(str, options_, function (err, contents) {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(contents);
            });
        });
    };
    Fs.prototype.mkdir = function (pathstr, mode) {
        return new Promise(function (resolve, reject) {
            var callback = function (err) {
                if (err) {
                    reject(err);
                    return;
                }
                resolve();
            };
            if (mode === undefined) {
                fs.mkdir(pathstr, callback);
            }
            else {
                fs.mkdir(pathstr, mode, callback);
            }
        });
    };
    Fs.prototype.mkdirP = function (pathstr, mode) {
        return __awaiter(this, void 0, void 0, function () {
            var directories, splitted, directory, ex_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        directories = [
                            pathstr
                        ];
                        _a.label = 1;
                    case 1:
                        if (!(directories.length > 0)) return [3, 6];
                        splitted = immunity.splitArray(directories, -1), directory = splitted.items[0];
                        directories = splitted.remainder;
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4, this.mkdir(directory, mode)];
                    case 3:
                        _a.sent();
                        return [3, 5];
                    case 4:
                        ex_1 = _a.sent();
                        if (ex_1.code === 'ENOENT') {
                            directories = immunity.appendToArray(directories, directory, path.dirname(directory));
                            return [3, 1];
                        }
                        if (ex_1.code === 'EEXIST') {
                            return [2];
                        }
                        throw ex_1;
                    case 5: return [3, 1];
                    case 6: return [2];
                }
            });
        });
    };
    Fs.prototype.rmdir = function (pathstr) {
        return new Promise(function (resolve, reject) {
            fs.rmdir(pathstr, function (err) {
                if (err) {
                    reject(err);
                    return;
                }
                resolve();
            });
        });
    };
    Fs.prototype.rmdirP = function (pathstr) {
        return __awaiter(this, void 0, void 0, function () {
            var directories, splitted, directory, list, pushedBack, _i, list_1, item, itemPath, itemStat, ex2_1, ex_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        directories = [
                            [pathstr, false]
                        ];
                        _a.label = 1;
                    case 1:
                        if (!(directories.length > 0)) return [3, 17];
                        splitted = immunity.splitArray(directories, -1), directory = splitted.items[0];
                        directories = splitted.remainder;
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 15, , 16]);
                        if (!directory[1]) return [3, 4];
                        return [4, this.rmdir(directory[0])];
                    case 3:
                        _a.sent();
                        return [3, 1];
                    case 4: return [4, this.readdir(directory[0])];
                    case 5:
                        list = _a.sent();
                        pushedBack = false;
                        _i = 0, list_1 = list;
                        _a.label = 6;
                    case 6:
                        if (!(_i < list_1.length)) return [3, 12];
                        item = list_1[_i];
                        if (item === '.' || item === '..') {
                            return [3, 11];
                        }
                        itemPath = path.join(directory[0], item);
                        _a.label = 7;
                    case 7:
                        _a.trys.push([7, 10, , 11]);
                        return [4, this.lstat(itemPath)];
                    case 8:
                        itemStat = _a.sent();
                        if (itemStat.isDirectory()) {
                            if (!pushedBack) {
                                directories = immunity.appendToArray(directories, [directory[0], true]);
                                pushedBack = true;
                            }
                            directories = immuity.appendToArray(directories, [itemPath, false]);
                            return [3, 11];
                        }
                        return [4, this.rm(itemPath)];
                    case 9:
                        _a.sent();
                        return [3, 11];
                    case 10:
                        ex2_1 = _a.sent();
                        if (ex2_1.code === 'ENOENT') {
                            return [2];
                        }
                        throw ex2_1;
                    case 11:
                        _i++;
                        return [3, 6];
                    case 12:
                        if (!!pushedBack) return [3, 14];
                        return [4, this.rmdir(directory[0])];
                    case 13:
                        _a.sent();
                        _a.label = 14;
                    case 14: return [3, 16];
                    case 15:
                        ex_2 = _a.sent();
                        if (ex_2.code === 'ENOENT') {
                            return [2];
                        }
                        throw ex_2;
                    case 16: return [3, 1];
                    case 17: return [2];
                }
            });
        });
    };
    Fs.prototype.lstat = function (pathstr) {
        return new Promise(function (resolve, reject) {
            fs.lstat(pathstr, function (err, stats) {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(stats);
            });
        });
    };
    Fs.prototype.readFile = function (pathstr, options) {
        return new Promise(function (resolve, reject) {
            var defaultOptions = { encoding: 'utf8' };
            var options_ = (options === undefined) ?
                defaultOptions :
                immunity.appendToObject(options, defaultOptions);
            fs.readFile(pathstr, options_, function (err, content) {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(content);
            });
        });
    };
    Fs.prototype.writeFile = function (pathstr, content, options) {
        return new Promise(function (resolve, reject) {
            var defaultOptions = { encoding: 'utf8' };
            var options_ = (options === undefined) ?
                defaultOptions :
                immunity.appendToObject(options, defaultOptions);
            fs.writeFile(pathstr, content, options_, function (err) {
                if (err) {
                    reject(err);
                    return;
                }
                resolve();
            });
        });
    };
    Fs.prototype.writeFileP = function (pathstr, content, options) {
        return __awaiter(this, void 0, void 0, function () {
            var parentDirectory;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        parentDirectory = path.dirname(pathstr);
                        this.mkdirP(parentDirectory);
                        return [4, this.writeFile(pathstr, content, options)];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    Fs.prototype.cp = function (pathstr, dest) {
        fs.createReadStream(pathstr)
            .pipe(fs.createWriteStream(dest));
    };
    Fs.prototype.cpP = function (str, dest) {
        return __awaiter(this, void 0, void 0, function () {
            var list, createdDirectories, _i, list_2, item, globParent, relativePath, relativeBasePath, destFile;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.glob(str)];
                    case 1:
                        list = _a.sent();
                        createdDirectories = [];
                        _i = 0, list_2 = list;
                        _a.label = 2;
                    case 2:
                        if (!(_i < list_2.length)) return [3, 6];
                        item = list_2[_i];
                        globParent = this.globParentOf(str, item), relativePath = (globParent !== null) ? item.substring(globParent.length) : item, relativeBasePath = path.dirname(relativePath);
                        if (!(createdDirectories.indexOf(relativeBasePath) === -1)) return [3, 4];
                        return [4, this.mkdirP(path.join(dest, relativeBasePath))];
                    case 3:
                        _a.sent();
                        createdDirectories = immunity.appendToArray(createdDirectories, relativeBasePath);
                        _a.label = 4;
                    case 4:
                        destFile = path.join(dest, relativePath);
                        this.cp(item, destFile);
                        _a.label = 5;
                    case 5:
                        _i++;
                        return [3, 2];
                    case 6: return [2];
                }
            });
        });
    };
    Fs.prototype.mv = function (pathstr, dest) {
        return new Promise(function (resolve, reject) {
            fs.rename(pathstr, dest, function (err) {
                if (err) {
                    reject(err);
                    return;
                }
                resolve();
            });
        });
    };
    Fs.prototype.mvP = function (str, dest) {
        return __awaiter(this, void 0, void 0, function () {
            var list, createdDirectories, _i, list_3, item, globParent, relativePath, relativeBasePath, destFile;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.glob(str, { nodir: false })];
                    case 1:
                        list = _a.sent();
                        createdDirectories = [];
                        _i = 0, list_3 = list;
                        _a.label = 2;
                    case 2:
                        if (!(_i < list_3.length)) return [3, 6];
                        item = list_3[_i];
                        globParent = this.globParentOf(str, item), relativePath = (globParent !== null) ? item.substring(globParent.length) : item, relativeBasePath = path.dirname(relativePath);
                        if (!(createdDirectories.indexOf(relativeBasePath) === -1)) return [3, 4];
                        return [4, this.mkdirP(path.join(dest, relativeBasePath))];
                    case 3:
                        _a.sent();
                        createdDirectories = immunity.appendToArray(createdDirectories, relativeBasePath);
                        _a.label = 4;
                    case 4:
                        destFile = path.join(dest, relativePath);
                        this.mv(item, destFile);
                        _a.label = 5;
                    case 5:
                        _i++;
                        return [3, 2];
                    case 6: return [2];
                }
            });
        });
    };
    Fs.prototype.rm = function (pathstr) {
        return new Promise(function (resolve, reject) {
            fs.unlink(pathstr, function (err) {
                if (err) {
                    reject(err);
                    return;
                }
                resolve();
            });
        });
    };
    Fs.prototype.rmP = function (str, recursiveForDirectories) {
        return __awaiter(this, void 0, void 0, function () {
            var list, directories, _i, list_4, item, itemStat, _a, directories_1, directory;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        list = this.glob(str, false);
                        directories = [];
                        _i = 0, list_4 = list;
                        _b.label = 1;
                    case 1:
                        if (!(_i < list_4.length)) return [3, 5];
                        item = list_4[_i];
                        return [4, this.lstat(item)];
                    case 2:
                        itemStat = _b.sent();
                        if (itemStat.isDirectory()) {
                            directories = immunity.prependToArray(directories, item);
                            return [3, 4];
                        }
                        return [4, this.rm(item)];
                    case 3:
                        _b.sent();
                        _b.label = 4;
                    case 4:
                        _i++;
                        return [3, 1];
                    case 5:
                        _a = 0, directories_1 = directories;
                        _b.label = 6;
                    case 6:
                        if (!(_a < directories_1.length)) return [3, 11];
                        directory = directories_1[_a];
                        if (!recursiveForDirectories) return [3, 8];
                        return [4, this.rmdirP(directory)];
                    case 7:
                        _b.sent();
                        return [3, 10];
                    case 8: return [4, this.rmdir(directory)];
                    case 9:
                        _b.sent();
                        _b.label = 10;
                    case 10:
                        _a++;
                        return [3, 6];
                    case 11: return [2];
                }
            });
        });
    };
    return Fs;
}());
exports.Fs = Fs;
exports.default = Fs;
//# sourceMappingURL=Fs.js.map