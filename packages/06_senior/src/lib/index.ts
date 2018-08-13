import mapObject from 'immunity/lib/mapObject';
import curryRight from 'evangelist/lib/curryRight';
import npm from './npm/index';
import SeniorMethods, { Options } from './methods';

function Senior(strategy: string, options?: Options): SeniorMethods | null {
    let selected: SeniorMethods | null = null;

    if (strategy === 'npm') {
        selected = npm;
    }

    if (selected !== null) {
        return mapObject(selected, (value, key) => {
            return { [key]: curryRight(value, options) };
        });
    }

    return selected;
}

export {
    Senior as default,
};
