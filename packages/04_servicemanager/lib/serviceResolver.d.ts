import ServiceLifetime from './serviceLifetime';
declare type ServiceResolver = (dependency: any, resolve: (target: any, lifetime?: ServiceLifetime, tags?: Array<string>) => void) => any;
export { ServiceResolver as default, };
