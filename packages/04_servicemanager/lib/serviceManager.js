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
const serviceDefinitionCollection_1 = require("./serviceDefinitionCollection");
const serviceLifetime_1 = require("./serviceLifetime");
const get_1 = require("./methods/get");
const getRange_1 = require("./methods/getRange");
const getOrResolve_1 = require("./methods/getOrResolve");
const getOrResolveRange_1 = require("./methods/getOrResolveRange");
const set_1 = require("./methods/set");
const setRange_1 = require("./methods/setRange");
const ensure_1 = require("./methods/ensure");
const all_1 = require("./methods/all");
const filter_1 = require("./methods/filter");
const filterByTag_1 = require("./methods/filterByTag");
class ServiceManager {
    constructor(resolver) {
        this.items = serviceDefinitionCollection_1.createServiceDefinitionCollection();
        this.resolver = resolver;
    }
    set(dependency, target, lifetime = serviceLifetime_1.default.Transient, tags = []) {
        const result = set_1.default(this.items, dependency, target, lifetime, tags);
        this.items = result.newCollection;
    }
    setRange(...declarations) {
        const result = setRange_1.default(this.items, ...declarations);
        this.items = result.newCollection;
    }
    get(dependency) {
        return get_1.default(this.items, dependency);
    }
    getRange(...dependencies) {
        return getRange_1.default(this.items, ...dependencies);
    }
    getOrResolve(dependency) {
        const result = getOrResolve_1.default(this.items, this.resolver, dependency);
        if (result.isChanged) {
            this.items = result.newCollection;
        }
        return result.result;
    }
    getOrResolveRange(...dependencies) {
        const result = getOrResolveRange_1.default(this.items, this.resolver, ...dependencies);
        if (result.isChanged) {
            this.items = result.newCollection;
        }
        return result.result;
    }
    ensure(dependencies, callback) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield ensure_1.default(this.items, dependencies, callback, this.resolver);
            if (result.isChanged) {
                this.items = result.newCollection;
            }
            return result.result;
        });
    }
    all() {
        return all_1.default(this.items);
    }
    filter(predicate) {
        return filter_1.default(this.items, predicate);
    }
    filterByTag(tag) {
        return filterByTag_1.default(this.items, tag);
    }
}
exports.default = ServiceManager;
//# sourceMappingURL=serviceManager.js.map