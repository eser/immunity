function decorate(target: Function, decorator: Function): Function {
    return function (...args): any {
        return decorator(...args, target);
    };
};

export {
    decorate as default,
};
