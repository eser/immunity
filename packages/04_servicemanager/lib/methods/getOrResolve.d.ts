import ServiceDefinitionCollection from '../serviceDefinitionCollection';
import ServiceResolver from '../serviceResolver';
declare type GetOrResolveResult = {
    isChanged: boolean;
    result: any;
    newCollection?: ServiceDefinitionCollection;
};
declare function getOrResolve(collection: ServiceDefinitionCollection, resolver: ServiceResolver | undefined, dependency: any): GetOrResolveResult;
export { getOrResolve as default, GetOrResolveResult, };
