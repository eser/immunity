import ServiceDefinitionCollection from '../serviceDefinitionCollection';
import ServiceDefinition from '../serviceDefinition';
declare type FilterPredicate = (serviceDefinition: ServiceDefinition, dependency: any) => boolean;
declare function filter(collection: ServiceDefinitionCollection, predicate: FilterPredicate): Array<string>;
export { filter as default, FilterPredicate };
