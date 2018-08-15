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
var getModuleIndex_1 = require("./getModuleIndex");
var list_1 = require("./list");
var appendToObject_1 = require("immunity/lib/appendToObject");
function listModuleIndexes(options) {
    return __awaiter(this, void 0, void 0, function () {
        var e_1, _a, _b, listResult, result, _c, _d, dependencyKey, _e, _f, _g, e_1_1;
        return __generator(this, function (_h) {
            switch (_h.label) {
                case 0: return [4, list_1.default(options)];
                case 1:
                    listResult = _h.sent();
                    result = {};
                    _h.label = 2;
                case 2:
                    _h.trys.push([2, 7, 8, 9]);
                    _c = __values(Object.keys(listResult)), _d = _c.next();
                    _h.label = 3;
                case 3:
                    if (!!_d.done) return [3, 6];
                    dependencyKey = _d.value;
                    _e = appendToObject_1.default;
                    _f = [result];
                    _b = {};
                    _g = dependencyKey;
                    return [4, getModuleIndex_1.default(dependencyKey, options)];
                case 4:
                    result = _e.apply(void 0, _f.concat([(_b[_g] = _h.sent(),
                            _b)]));
                    _h.label = 5;
                case 5:
                    _d = _c.next();
                    return [3, 3];
                case 6: return [3, 9];
                case 7:
                    e_1_1 = _h.sent();
                    e_1 = { error: e_1_1 };
                    return [3, 9];
                case 8:
                    try {
                        if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                    }
                    finally { if (e_1) throw e_1.error; }
                    return [7];
                case 9: return [2, result];
            }
        });
    });
}
exports.default = listModuleIndexes;
//# sourceMappingURL=listModuleIndexes.js.map