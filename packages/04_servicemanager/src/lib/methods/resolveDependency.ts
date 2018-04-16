import ServiceLifetime from '../serviceLifetime';

function resolveDependency(target: any, lifetime: ServiceLifetime): any {
    if (lifetime === ServiceLifetime.Singleton || !(target instanceof Function)) {
        return target;
    }

    return target();
}

export {
    resolveDependency as default,
};
