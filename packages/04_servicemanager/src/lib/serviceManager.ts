import ServiceDeclaration from './serviceDeclaration';
import ServiceDefinition from './serviceDefinition';
import ServiceDefinitionCollection, { createServiceDefinitionCollection } from './serviceDefinitionCollection';
import ServiceLifetime from './serviceLifetime';
import ServiceResolver from './serviceResolver';

import get from './methods/get';
import getRange from './methods/getRange';
import getOrResolve from './methods/getOrResolve';
import getOrResolveRange from './methods/getOrResolveRange';
import set from './methods/set';
import setRange from './methods/setRange';
import ensure from './methods/ensure';
import all from './methods/all';
import filter, { FilterPredicate } from './methods/filter';
import filterByTag from './methods/filterByTag';

class ServiceManager {
    items: ServiceDefinitionCollection;
    resolver?: ServiceResolver;

    constructor(resolver?: ServiceResolver) {
        this.items = createServiceDefinitionCollection();
        this.resolver = resolver;
    }

    set(dependency: any, target: any, lifetime: ServiceLifetime = ServiceLifetime.Transient, tags: Array<string> = []): void {
        const result = set(this.items, dependency, target, lifetime, tags);

        this.items = result.newCollection;
    }

    setRange(...declarations: Array<ServiceDeclaration>): void {
        const result = setRange(this.items, ...declarations);

        this.items = result.newCollection;
    }

    get(dependency: any): any {
        return get(this.items, dependency);
    }

    getRange(...dependencies: Array<any>): Array<any> {
        return getRange(this.items, ...dependencies);
    }

    getOrResolve(dependency: any): any {
        const result = getOrResolve(this.items, this.resolver, dependency);

        if (result.isChanged) {
            this.items = result.newCollection!;
        }

        return result.result;
    }

    getOrResolveRange(...dependencies: Array<any>): any {
        const result = getOrResolveRange(this.items, this.resolver, ...dependencies);

        if (result.isChanged) {
            this.items = result.newCollection!;
        }

        return result.result;
    }

    async ensure(dependencies: Array<any>, callback: (...services: Array<any>) => any): Promise<any> {
        const result = await ensure(this.items, dependencies, callback, this.resolver);

        if (result.isChanged) {
            this.items = result.newCollection!;
        }

        return result.result;
    }

    all(): Array<string> {
        return all(this.items);
    }

    filter(predicate: FilterPredicate): Array<string> {
        return filter(this.items, predicate);
    }

    filterByTag(tag: string): Array<string> {
        return filterByTag(this.items, tag);
    }
}

export {
    ServiceManager as default,
};
