function decorate(target: Function, decorator: Function) {
    return function (...args: any[]): any {
        return decorator(...args, target);
    };
};

export {
    decorate as default,
};
