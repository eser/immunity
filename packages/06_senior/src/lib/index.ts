import npm from './npm/index';
import SeniorMethods from './methods';

function Senior(strategy): SeniorMethods | null {
    if (strategy === 'npm') {
        return npm;
    }

    return null;
}

export {
    Senior as default,
};
