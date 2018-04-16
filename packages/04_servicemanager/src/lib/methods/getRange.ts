import ServiceDefinitionCollection from '../serviceDefinitionCollection';

import get from './get';

function getRange(collection: ServiceDefinitionCollection, ...dependencies: Array<any>): Array<any> {
    return dependencies.map((dependency) => get(collection, dependency));
}

export {
    getRange as default,
};
