import ServiceDefinitionCollection from '../serviceDefinitionCollection';
import ServiceDefinition from '../serviceDefinition';

type FilterPredicate = (serviceDefinition: ServiceDefinition, dependency: any) => boolean;

function filter(collection: ServiceDefinitionCollection, predicate: FilterPredicate): Array<string> {
    const result: Array<string> = [];

    for (const [ dependency, serviceDefinition ] of collection.entries()) {
        if (predicate(serviceDefinition, dependency)) {
            result.push(dependency);
        }
    }

    return result;
}

export {
    filter as default,
    FilterPredicate,
};
