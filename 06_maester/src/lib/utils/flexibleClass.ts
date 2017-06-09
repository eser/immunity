export function flexibleClass(definition) {
    if (definition instanceof Function) {
        return definition;
    }

    // definition instanceof Object
    return function (...args) {
        Object.assign(this, definition);

        if (this.hasOwnProperty('constructor')) {
            this.constructor.call(this, ...args);
        }
    };
}

export default flexibleClass;
