import ServiceDefinition from './serviceDefinition';
declare type ServiceDefinitionCollection = Map<any, ServiceDefinition>;
declare function createServiceDefinitionCollection(): Map<any, ServiceDefinition>;
declare function cloneServiceDefinitionCollection(collection: ServiceDefinitionCollection): Map<any, ServiceDefinition>;
export { ServiceDefinitionCollection as default, createServiceDefinitionCollection, cloneServiceDefinitionCollection, };
