function assignPolyfill(target: Object, ...sources: Object[]) {
    for (const source of sources) {
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
