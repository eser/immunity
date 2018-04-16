import ServiceLifetime from './serviceLifetime';
interface ServiceDefinition {
    target: any;
    lifetime: ServiceLifetime;
    tags: Array<string>;
}
export { ServiceDefinition as default };
