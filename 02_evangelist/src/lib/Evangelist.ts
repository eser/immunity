export class Evangelist {
    wrap(target: Function, wrapper: Function): Function {
        return function (...args): any {
            return wrapper(...args, target);
        };
    }

    pipe(...funcs: Function[]): Function {
        return funcs.reduce(
            function (previousValue: Function, currentValue: Function): Function {
                return function (...args): any {
                    return currentValue(previousValue(...args));
                }
            }
        );
    }
}

export default Evangelist;
