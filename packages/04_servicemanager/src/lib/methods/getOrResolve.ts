import ServiceDefinitionCollection from '../serviceDefinitionCollection';
import ServiceResolver from '../serviceResolver';

import getOrResolveRange, { GetOrResolveRangeResult } from './getOrResolveRange';

type GetOrResolveResult = {
    isChanged: boolean,
    result: any,
    newCollection?: ServiceDefinitionCollection,
};

function getOrResolve(collection: ServiceDefinitionCollection, resolver: ServiceResolver | undefined, dependency: any): GetOrResolveResult {
    const result = getOrResolveRange(
        collection,
        resolver,
        dependency,
    );

    return {
        isChanged: result.isChanged,
        result: result.result[0],
        newCollection: result.newCollection,
    };
}

export {
    getOrResolve as default,
    GetOrResolveResult,
};
