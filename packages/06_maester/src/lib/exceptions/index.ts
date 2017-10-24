import BaseException from './BaseException';

class ExceptionManager {
    base: any;

    constructor() {
        this.base = BaseException;
    }
}

export {
    ExceptionManager as default,
    BaseException,
};
