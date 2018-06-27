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
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var __1 = require("../");
test('basic get set', function () {
    var services = new __1.ServiceManager();
    services.set('eser', '12345');
    var eser = services.get('eser');
    expect(eser).toEqual('12345');
});
test('set with tag', function () {
    var services = new __1.ServiceManager();
    services.set('eser', '12345', __1.ServiceLifetime.Singleton, ['general']);
    services.set('seyma', '6789', __1.ServiceLifetime.Singleton, ['other']);
    var generalServices = services.filterByTag('general');
    expect(generalServices).toEqual(['eser']);
});
test('getRange', function () {
    var services = new __1.ServiceManager();
    services.set('eser', '12345');
    services.set('seyma', '6789');
    var _a = __read(services.getRange('eser', 'seyma'), 2), eser = _a[0], seyma = _a[1];
    expect(eser).toEqual('12345');
    expect(seyma).toEqual('6789');
});
test('getOrResolve', function () {
    var resolver = function (dependency, resolve) {
        resolve("Hi " + dependency);
    };
    var services = new __1.ServiceManager(resolver);
    var eser = services.getOrResolve('eser');
    expect(eser).toEqual('Hi eser');
});
test('getOrResolveRange', function () {
    var resolver = function (dependency, resolve) {
        resolve("Hi " + dependency);
    };
    var services = new __1.ServiceManager(resolver);
    var _a = __read(services.getOrResolveRange('eser', 'seyma'), 2), eser = _a[0], seyma = _a[1];
    expect(eser).toEqual('Hi eser');
    expect(seyma).toEqual('Hi seyma');
});
test('filterByTag', function () {
    var services = new __1.ServiceManager();
    services.set('eser', '12345');
    services.set('seyma', '6789');
    services.set('kedi', '9999');
    var allOfThem = services.all();
    expect(allOfThem).toEqual(['eser', 'seyma', 'kedi']);
});
test('filter', function () {
    var services = new __1.ServiceManager();
    services.set('eser', '12345');
    services.set('seyma', '6789');
    services.set('kedi', '9999');
    var filtered = services.filter(function (service, dependency) { return dependency.indexOf('s') >= 0; });
    expect(filtered).toEqual(['eser', 'seyma']);
});
test('filterByTag', function () {
    var services = new __1.ServiceManager();
    services.set('eser', '12345', __1.ServiceLifetime.Singleton, ['human']);
    services.set('seyma', '6789', __1.ServiceLifetime.Singleton, ['human']);
    services.set('kedi', '9999', __1.ServiceLifetime.Singleton, ['cat']);
    var filtered = services.filterByTag('cat');
    expect(filtered).toEqual(['kedi']);
});
test('ensure', function () { return __awaiter(_this, void 0, void 0, function () {
    var resolver, services, result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                resolver = function (dependency, resolve) {
                    resolve("Hi " + dependency);
                };
                services = new __1.ServiceManager(resolver);
                return [4, services.ensure(['eser', 'seyma'], function (eser, seyma) {
                        return [eser, seyma];
                    })];
            case 1:
                result = _a.sent();
                expect(result[0]).toEqual('Hi eser');
                expect(result[1]).toEqual('Hi seyma');
                return [2];
        }
    });
}); });
test('ensure with promises', function () { return __awaiter(_this, void 0, void 0, function () {
    var resolver, services, result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                resolver = function (dependency, resolve) {
                    resolve(Promise.resolve("Hi " + dependency.toUpperCase()));
                };
                services = new __1.ServiceManager(resolver);
                return [4, services.ensure(['eser', 'seyma'], function (eser, seyma) {
                        return [eser, seyma];
                    })];
            case 1:
                result = _a.sent();
                expect(result[0]).toEqual('Hi ESER');
                expect(result[1]).toEqual('Hi SEYMA');
                return [2];
        }
    });
}); });
//# sourceMappingURL=index.js.map