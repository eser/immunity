import ServiceDeclaration from '../serviceDeclaration';
import ServiceDefinitionCollection from '../serviceDefinitionCollection';
declare type SetRangeResult = {
    done: boolean;
    newCollection: ServiceDefinitionCollection;
};
declare function setRange(collection: ServiceDefinitionCollection, ...declarations: Array<ServiceDeclaration>): SetRangeResult;
export { setRange as default, SetRangeResult, };
