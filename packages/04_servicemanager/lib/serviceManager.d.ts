import ServiceDeclaration from './serviceDeclaration';
import ServiceDefinitionCollection from './serviceDefinitionCollection';
import ServiceLifetime from './serviceLifetime';
import ServiceResolver from './serviceResolver';
import { FilterPredicate } from './methods/filter';
declare class ServiceManager {
    items: ServiceDefinitionCollection;
    resolver?: ServiceResolver;
    constructor(resolver?: ServiceResolver);
    set(dependency: any, target: any, lifetime?: ServiceLifetime, tags?: Array<string>): void;
    setRange(...declarations: Array<ServiceDeclaration>): void;
    get(dependency: any): any;
    getRange(...dependencies: Array<any>): Array<any>;
    getOrResolve(dependency: any): any;
    getOrResolveRange(...dependencies: Array<any>): any;
    ensure(dependencies: Array<any>, callback: (...services: Array<any>) => any): Promise<any>;
    all(): Array<string>;
    filter(predicate: FilterPredicate): Array<string>;
    filterByTag(tag: string): Array<string>;
}
export { ServiceManager as default, };
