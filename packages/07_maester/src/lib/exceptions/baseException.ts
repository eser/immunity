class BaseException extends Error {
    innerDetails: any;

    constructor(message: string, innerDetails: any) {
        super(message);

        this.name = this.constructor.name;
        this.innerDetails = innerDetails;

        if (Error.captureStackTrace.constructor === Function) {
            Error.captureStackTrace(this, this.constructor);
        }
        else {
            this.stack = (new Error(message)).stack;
        }
    }

    static wrap(errorObject) {
        if (errorObject instanceof this) {
            return errorObject;
        }

        return new this(errorObject.message, errorObject);
    }
}

export {
    BaseException as default,
};
