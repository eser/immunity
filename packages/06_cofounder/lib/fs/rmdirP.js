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
var path = require("path");
var splitArray_1 = require("immunity/lib/splitArray");
var lstat_1 = require("./lstat");
var readdir_1 = require("./readdir");
var rm_1 = require("./rm");
var rmdir_1 = require("./rmdir");
function rmdirP(pathstr) {
    return __awaiter(this, void 0, void 0, function () {
        var e_1, _a, directories, splitted, directory, list, pushedBack, list_1, list_1_1, item, itemPath, itemStat, ex2_1, e_1_1, ex_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    directories = [
                        [pathstr, false],
                    ];
                    _b.label = 1;
                case 1:
                    if (!(directories.length > 0)) return [3, 21];
                    splitted = splitArray_1.default(directories, -1);
                    directory = splitted.items[0];
                    directories = splitted.remainder;
                    _b.label = 2;
                case 2:
                    _b.trys.push([2, 19, , 20]);
                    if (!directory[1]) return [3, 4];
                    return [4, rmdir_1.default(directory[0])];
                case 3:
                    _b.sent();
                    return [3, 1];
                case 4: return [4, readdir_1.default(directory[0])];
                case 5:
                    list = _b.sent();
                    pushedBack = false;
                    _b.label = 6;
                case 6:
                    _b.trys.push([6, 14, 15, 16]);
                    list_1 = __values(list), list_1_1 = list_1.next();
                    _b.label = 7;
                case 7:
                    if (!!list_1_1.done) return [3, 13];
                    item = list_1_1.value;
                    if (item === '.' || item === '..') {
                        return [3, 12];
                    }
                    itemPath = path.join(directory[0], item);
                    _b.label = 8;
                case 8:
                    _b.trys.push([8, 11, , 12]);
                    return [4, lstat_1.default(itemPath)];
                case 9:
                    itemStat = _b.sent();
                    if (itemStat.isDirectory()) {
                        if (!pushedBack) {
                            directories = __spread(directories, [[directory[0], true]]);
                            pushedBack = true;
                        }
                        directories = __spread(directories, [[itemPath, false]]);
                        return [3, 12];
                    }
                    return [4, rm_1.default(itemPath)];
                case 10:
                    _b.sent();
                    return [3, 12];
                case 11:
                    ex2_1 = _b.sent();
                    if (ex2_1.code === 'ENOENT') {
                        return [2];
                    }
                    throw ex2_1;
                case 12:
                    list_1_1 = list_1.next();
                    return [3, 7];
                case 13: return [3, 16];
                case 14:
                    e_1_1 = _b.sent();
                    e_1 = { error: e_1_1 };
                    return [3, 16];
                case 15:
                    try {
                        if (list_1_1 && !list_1_1.done && (_a = list_1.return)) _a.call(list_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                    return [7];
                case 16:
                    if (!!pushedBack) return [3, 18];
                    return [4, rmdir_1.default(directory[0])];
                case 17:
                    _b.sent();
                    _b.label = 18;
                case 18: return [3, 20];
                case 19:
                    ex_1 = _b.sent();
                    if (ex_1.code === 'ENOENT') {
                        return [2];
                    }
                    throw ex_1;
                case 20: return [3, 1];
                case 21: return [2];
            }
        });
    });
}
exports.default = rmdirP;
//# sourceMappingURL=rmdirP.js.map