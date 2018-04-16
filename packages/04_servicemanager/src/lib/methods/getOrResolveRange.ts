import ServiceDeclaration from '../serviceDeclaration';
import ServiceDefinitionCollection, { cloneServiceDefinitionCollection } from '../serviceDefinitionCollection';
import ServiceLifetime from '../serviceLifetime';
import ServiceResolver from '../serviceResolver';

import get from './get';
import setRange from './setRange';

type GetOrResolveRangeResult = {
    isChanged: boolean,
    result: Array<any>,
    newCollection?: ServiceDefinitionCollection,
};

function getOrResolveRange(collection: ServiceDefinitionCollection, resolver: ServiceResolver | undefined, ...dependencies: Array<any>): GetOrResolveRangeResult {
    const result: Array<any> = [];
    const addList: Array<ServiceDeclaration> = [];

    for (const dependencyKey in dependencies) {
        const dependency = dependencies[dependencyKey];

        const existingValue = get(collection, dependency);

        if (existingValue !== undefined) {
            result.push(existingValue);

            continue;
        }

        const resolveFunc = (target: any, lifetime: ServiceLifetime = ServiceLifetime.Transient, tags: Array<string> = []): void => {
            addList.push({
                dependency: dependency,
                target: target,
                lifetime: lifetime,
                tags: tags,
            });

            result.push(target);
        };

        if (resolver !== undefined) {
            resolver(dependency, resolveFunc);
        }
    }

    const isChanged = (addList.length > 0);

    return {
        isChanged: isChanged,
        result: result,
        newCollection: isChanged ?
            setRange(collection, ...addList).newCollection :
            collection,
    };
}

export {
    getOrResolveRange as default,
    GetOrResolveRangeResult,
};
