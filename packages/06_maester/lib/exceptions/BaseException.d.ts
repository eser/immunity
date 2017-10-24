declare class BaseException {
    exception: any;
    constructor(input: any, exception?: null);
    static wrap(input: any, ex: any): BaseException;
}
export { BaseException as default };
