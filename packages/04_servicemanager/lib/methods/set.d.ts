import ServiceDefinitionCollection from '../serviceDefinitionCollection';
import ServiceLifetime from '../serviceLifetime';
import { SetRangeResult } from './setRange';
declare type SetResult = SetRangeResult;
declare function set(collection: ServiceDefinitionCollection, dependency: any, target: any, lifetime?: ServiceLifetime, tags?: Array<string>): SetResult;
export { set as default, SetResult, };
