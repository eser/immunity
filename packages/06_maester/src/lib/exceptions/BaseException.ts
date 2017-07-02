export class BaseException {
    exception: any;

    constructor(input, exception = null) {
        for (let key in input) {
            if (key in this) {
                continue;
            }

            this[key] = input[key];
        }

        this.exception = exception;
    }

    static wrap(input, ex) {
        if (ex instanceof this) {
            return ex;
        }

        return new this(input, ex);
    }
}

export default BaseException;
