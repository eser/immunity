import ServiceDeclaration from './serviceDeclaration';
import ServiceDefinition from './serviceDefinition';
import ServiceDefinitionCollection from './serviceDefinitionCollection';
import ServiceLifetime from './serviceLifetime';
import ServiceManager from './serviceManager';
import ServiceResolver from './serviceResolver';

const services = new ServiceManager();

export {
    services as default,
    ServiceDeclaration,
    ServiceDefinition,
    ServiceDefinitionCollection,
    ServiceLifetime,
    ServiceManager,
    ServiceResolver,
};
