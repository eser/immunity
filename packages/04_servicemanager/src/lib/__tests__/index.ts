import { ServiceManager, ServiceLifetime } from '../';

test('basic get set', () => {
    const services = new ServiceManager();

    services.set('eser', '12345');

    const eser = services.get('eser');

    expect(eser).toEqual('12345');
});

test('set with tag', () => {
    const services = new ServiceManager();

    services.set('eser', '12345', ServiceLifetime.Singleton, [ 'general' ]);
    services.set('seyma', '6789', ServiceLifetime.Singleton, [ 'other' ]);

    const generalServices = services.filterByTag('general');

    expect(generalServices).toEqual([ 'eser' ]);
});

test('getRange', () => {
    const services = new ServiceManager();

    services.set('eser', '12345');
    services.set('seyma', '6789');

    const [ eser, seyma ] = services.getRange('eser', 'seyma');

    expect(eser).toEqual('12345');
    expect(seyma).toEqual('6789');
});

test('getOrResolve', () => {
    const resolver = (dependency, resolve) => {
        resolve(`Hi ${dependency}`);
    };

    const services = new ServiceManager(resolver);

    const eser = services.getOrResolve('eser');

    expect(eser).toEqual('Hi eser');
});

test('getOrResolveRange', () => {
    const resolver = (dependency, resolve) => {
        resolve(`Hi ${dependency}`);
    };

    const services = new ServiceManager(resolver);

    const [ eser, seyma ] = services.getOrResolveRange('eser', 'seyma');

    expect(eser).toEqual('Hi eser');
    expect(seyma).toEqual('Hi seyma');
});

test('ensure', async () => {
    const resolver = (dependency, resolve) => {
        resolve(`Hi ${dependency}`);
    };

    const services = new ServiceManager(resolver);

    const result = await services.ensure(
        [ 'eser', 'seyma' ],
        (eser, seyma) => {
            return [ eser, seyma ];
        }
    );

    expect(result[0]).toEqual('Hi eser');
    expect(result[1]).toEqual('Hi seyma');
});

test('ensure with promises', async () => {
    const resolver = (dependency, resolve) => {
        resolve(Promise.resolve(`Hi ${dependency.toUpperCase()}`));
    };

    const services = new ServiceManager(resolver);

    const result = await services.ensure(
        [ 'eser', 'seyma' ],
        (eser, seyma) => {
            return [ eser, seyma ];
        }
    );

    expect(result[0]).toEqual('Hi ESER');
    expect(result[1]).toEqual('Hi SEYMA');
});
