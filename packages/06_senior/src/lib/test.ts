import Senior from './index';

const pluginManager = Senior('npm', { homePath: './testing' });

// pluginManager!.install('tr2utf8');
pluginManager!.list()
    .then(x => console.log(x));

pluginManager!.listModuleIndexes()
    .then(x => console.log(x));
