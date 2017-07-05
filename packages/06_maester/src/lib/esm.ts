import { Maester } from './Maester';
import { BaseException } from './exceptions/BaseException';

const maester = new Maester();
maester.logging.addLogger('default', 'console', 'console');

export {
    Maester,
    BaseException
};

export default maester;
