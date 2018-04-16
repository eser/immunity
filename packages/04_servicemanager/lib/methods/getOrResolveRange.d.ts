import ServiceDefinitionCollection from '../serviceDefinitionCollection';
import ServiceResolver from '../serviceResolver';
declare type GetOrResolveRangeResult = {
    isChanged: boolean;
    result: Array<any>;
    newCollection?: ServiceDefinitionCollection;
};
declare function getOrResolveRange(collection: ServiceDefinitionCollection, resolver: ServiceResolver | undefined, ...dependencies: Array<any>): GetOrResolveRangeResult;
export { getOrResolveRange as default, GetOrResolveRangeResult };
