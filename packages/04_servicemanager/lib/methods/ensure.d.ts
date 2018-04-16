import ServiceDefinitionCollection from '../serviceDefinitionCollection';
import ServiceResolver from '../serviceResolver';
declare type EnsureResult = {
    isChanged: boolean;
    result: any;
    newCollection?: ServiceDefinitionCollection;
};
declare function ensure(collection: ServiceDefinitionCollection, dependencies: Array<any>, callback: (...services: Array<any>) => any, resolver?: ServiceResolver): Promise<EnsureResult>;
export { ensure as default, EnsureResult };
