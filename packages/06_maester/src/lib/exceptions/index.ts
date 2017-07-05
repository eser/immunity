import { BaseException } from './BaseException';

export class ExceptionManager {
    base: any;

    constructor() {
        this.base = BaseException;
    }
};

export default ExceptionManager;
