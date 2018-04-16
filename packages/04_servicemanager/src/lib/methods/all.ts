import ServiceDefinitionCollection from '../serviceDefinitionCollection';

function all(collection: ServiceDefinitionCollection): Array<string> {
    return Array.from(collection.keys());
}

export {
    all as default,
};
