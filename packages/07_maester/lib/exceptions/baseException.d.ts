declare class BaseException extends Error {
    innerDetails: any;
    constructor(message: string, innerDetails: any);
    static wrap(errorObject: any): BaseException;
}
export { BaseException as default };
