export function assignPolyfill(target: Object, ...sources: Object[]) {
    for (const source of sources) {
        for (const key of Object.getOwnPropertyNames(source)) {
            target[key] = source[key];
        }
    }

    return target;
};

export const assign = (Object.assign !== undefined) ? Object.assign : assignPolyfill;

export default assign;
