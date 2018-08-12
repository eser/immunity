import node from './node/index';
import CofounderMethods from './methods';

function Cofounder(strategy): CofounderMethods | null {
    if (strategy === 'node') {
        return node;
    }

    return null;
}

export {
    Cofounder as default,
};
