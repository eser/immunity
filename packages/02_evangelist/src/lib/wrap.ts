export function wrap(target: Function, wrapper: Function): Function {
    return function (...args): any {
        return wrapper(...args, target);
    };
};

export default wrap;
