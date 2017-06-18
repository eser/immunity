export class BaseException {
    exception: any;

    constructor(input, exception = null) {
        Object.keys(input).forEach((key) => {
            if (key in this) {
                return;
            }

            this[key] = input[key];
        });

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
