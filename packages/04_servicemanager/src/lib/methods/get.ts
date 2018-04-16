import ServiceDefinitionCollection from '../serviceDefinitionCollection';

import resolveDependency from './resolveDependency';

function get(collection: ServiceDefinitionCollection, dependency: any): any {
    const serviceDefinition = collection.get(dependency);

    if (serviceDefinition === undefined) {
        return undefined;
    }

    return resolveDependency(serviceDefinition.target, serviceDefinition.lifetime);
}

export {
    get as default,
};
