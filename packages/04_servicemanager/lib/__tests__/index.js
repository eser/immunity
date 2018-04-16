"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require("../");
test('basic get set', () => {
    const services = new _1.ServiceManager();
    services.set('eser', '12345');
    const eser = services.get('eser');
    expect(eser).toEqual('12345');
});
test('set with tag', () => {
    const services = new _1.ServiceManager();
    services.set('eser', '12345', _1.ServiceLifetime.Singleton, ['general']);
    services.set('seyma', '6789', _1.ServiceLifetime.Singleton, ['other']);
    const generalServices = services.filterByTag('general');
    expect(generalServices).toEqual(['eser']);
});
test('getRange', () => {
    const services = new _1.ServiceManager();
    services.set('eser', '12345');
    services.set('seyma', '6789');
    const [eser, seyma] = services.getRange('eser', 'seyma');
    expect(eser).toEqual('12345');
    expect(seyma).toEqual('6789');
});
test('getOrResolve', () => {
    const resolver = (dependency, resolve) => {
        resolve(`Hi ${dependency}`);
    };
    const services = new _1.ServiceManager(resolver);
    const eser = services.getOrResolve('eser');
    expect(eser).toEqual('Hi eser');
});
test('getOrResolveRange', () => {
    const resolver = (dependency, resolve) => {
        resolve(`Hi ${dependency}`);
    };
    const services = new _1.ServiceManager(resolver);
    const [eser, seyma] = services.getOrResolveRange('eser', 'seyma');
    expect(eser).toEqual('Hi eser');
    expect(seyma).toEqual('Hi seyma');
});
test('filterByTag', () => {
    const services = new _1.ServiceManager();
    services.set('eser', '12345');
    services.set('seyma', '6789');
    services.set('kedi', '9999');
    const allOfThem = services.all();
    expect(allOfThem).toEqual(['eser', 'seyma', 'kedi']);
});
test('filter', () => {
    const services = new _1.ServiceManager();
    services.set('eser', '12345');
    services.set('seyma', '6789');
    services.set('kedi', '9999');
    const filtered = services.filter((service, dependency) => dependency.indexOf('s') >= 0);
    expect(filtered).toEqual(['eser', 'seyma']);
});
test('filterByTag', () => {
    const services = new _1.ServiceManager();
    services.set('eser', '12345', _1.ServiceLifetime.Singleton, ['human']);
    services.set('seyma', '6789', _1.ServiceLifetime.Singleton, ['human']);
    services.set('kedi', '9999', _1.ServiceLifetime.Singleton, ['cat']);
    const filtered = services.filterByTag('cat');
    expect(filtered).toEqual(['kedi']);
});
test('ensure', () => __awaiter(this, void 0, void 0, function* () {
    const resolver = (dependency, resolve) => {
        resolve(`Hi ${dependency}`);
    };
    const services = new _1.ServiceManager(resolver);
    const result = yield services.ensure(['eser', 'seyma'], (eser, seyma) => {
        return [eser, seyma];
    });
    expect(result[0]).toEqual('Hi eser');
    expect(result[1]).toEqual('Hi seyma');
}));
test('ensure with promises', () => __awaiter(this, void 0, void 0, function* () {
    const resolver = (dependency, resolve) => {
        resolve(Promise.resolve(`Hi ${dependency.toUpperCase()}`));
    };
    const services = new _1.ServiceManager(resolver);
    const result = yield services.ensure(['eser', 'seyma'], (eser, seyma) => {
        return [eser, seyma];
    });
    expect(result[0]).toEqual('Hi ESER');
    expect(result[1]).toEqual('Hi SEYMA');
}));
//# sourceMappingURL=index.js.map