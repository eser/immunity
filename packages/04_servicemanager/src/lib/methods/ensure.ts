import ServiceDefinitionCollection from '../serviceDefinitionCollection';
import ServiceResolver from '../serviceResolver';

import getOrResolveRange from './getOrResolveRange';

type EnsureResult = {
    isChanged: boolean,
    result: any,
    newCollection?: ServiceDefinitionCollection,
};

async function ensure(collection: ServiceDefinitionCollection, dependencies: Array<any>, callback: (...services: Array<any>) => any, resolver?: ServiceResolver): Promise<EnsureResult> {
    const serviceResolutions = getOrResolveRange(collection, resolver, ...dependencies);

    const services = await Promise.all(serviceResolutions.result);
    const result = await callback(...services);

    return {
        isChanged: serviceResolutions.isChanged,
        result: result,
        newCollection: serviceResolutions.newCollection,
    };
}

export {
    ensure as default,
    EnsureResult,
};
