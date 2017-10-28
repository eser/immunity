function pipe(...funcs: Function[]): Function {
    return funcs.reduce(
        function (previousValue: Function, currentValue: Function): Function {
            return function (...args): any {
                return currentValue(previousValue(...args));
            }
        },
    );
}

export {
    pipe as default,
};
