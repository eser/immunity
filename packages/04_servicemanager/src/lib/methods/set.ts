import ServiceDefinitionCollection from '../serviceDefinitionCollection';
import ServiceLifetime from '../serviceLifetime';

import setRange, { SetRangeResult } from './setRange';

type SetResult = SetRangeResult;

function set(collection: ServiceDefinitionCollection, dependency: any, target: any, lifetime: ServiceLifetime = ServiceLifetime.Transient, tags: Array<string> = []): SetResult {
    return setRange(
        collection,
        {
            dependency: dependency,
            target: target,
            lifetime: lifetime,
            tags: tags,
        },
    );
}

export {
    set as default,
    SetResult,
};
