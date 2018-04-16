import ServiceDefinitionCollection from '../serviceDefinitionCollection';

import filter from './filter';

function filterByTag(collection: ServiceDefinitionCollection, tag: string): Array<string> {
    return filter(collection, (serviceDefinition, dependency) => serviceDefinition.tags.indexOf(tag) >= 0);
}

export {
    filterByTag as default,
};
