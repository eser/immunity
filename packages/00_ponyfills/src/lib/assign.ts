function assignPolyfill(target: Object, ...sources: Array<Object>): Object {
    for (const source of sources) {
        if (source === null || source === undefined) {
            continue;
        }

        for (const key of Object.getOwnPropertyNames(source)) {
            target[key] = source[key];
        }
    }

    return target;
}

const assign = (Object.hasOwnProperty('assign') ? Object['assign'] : assignPolyfill);

export {
    assign as default,
    assignPolyfill,
};
