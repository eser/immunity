import { Maester } from './Maester';

const maester = new Maester();
maester.logging.addLogger('default', 'console', 'nodeConsole');

export = maester;
