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
var glob_1 = require("./glob");
var globParentOf_1 = require("./globParentOf");
var mkdirP_1 = require("./mkdirP");
var mv_1 = require("./mv");
function mvP(str, dest) {
    return __awaiter(this, void 0, void 0, function () {
        var e_1, _a, list, createdDirectories, list_1, list_1_1, item, globParent, relativePath, relativeBasePath, destFile, e_1_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4, glob_1.default(str, { nodir: false })];
                case 1:
                    list = _b.sent();
                    createdDirectories = [];
                    _b.label = 2;
                case 2:
                    _b.trys.push([2, 9, 10, 11]);
                    list_1 = __values(list), list_1_1 = list_1.next();
                    _b.label = 3;
                case 3:
                    if (!!list_1_1.done) return [3, 8];
                    item = list_1_1.value;
                    globParent = globParentOf_1.default(str, item);
                    relativePath = (globParent !== null) ? item.substring(globParent.length) : item;
                    relativeBasePath = path.dirname(relativePath);
                    if (!(createdDirectories.indexOf(relativeBasePath) === -1)) return [3, 5];
                    return [4, mkdirP_1.default(path.join(dest, relativeBasePath))];
                case 4:
                    _b.sent();
                    createdDirectories = __spread(createdDirectories, [relativeBasePath]);
                    _b.label = 5;
                case 5:
                    destFile = path.join(dest, relativePath);
                    return [4, mv_1.default(item, destFile)];
                case 6:
                    _b.sent();
                    _b.label = 7;
                case 7:
                    list_1_1 = list_1.next();
                    return [3, 3];
                case 8: return [3, 11];
                case 9:
                    e_1_1 = _b.sent();
                    e_1 = { error: e_1_1 };
                    return [3, 11];
                case 10:
                    try {
                        if (list_1_1 && !list_1_1.done && (_a = list_1.return)) _a.call(list_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                    return [7];
                case 11: return [2];
            }
        });
    });
}
exports.default = mvP;
//# sourceMappingURL=mvP.js.map