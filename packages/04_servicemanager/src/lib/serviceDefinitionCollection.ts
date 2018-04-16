import ServiceDefinition from './serviceDefinition';

type ServiceDefinitionCollection = Map<any, ServiceDefinition>;

function createServiceDefinitionCollection() {
    return new Map<any, ServiceDefinition>();
}

function cloneServiceDefinitionCollection(collection: ServiceDefinitionCollection) {
    return new Map<any, ServiceDefinition>(collection);
}

export {
    ServiceDefinitionCollection as default,
    createServiceDefinitionCollection,
    cloneServiceDefinitionCollection,
};
