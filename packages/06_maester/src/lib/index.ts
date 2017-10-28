import Maester from './maester';
import ConsoleLogger from './logging/loggers/consoleLogger';
import NodeConsoleFormatter from './logging/formatters/nodeConsoleFormatter';

const maester = new Maester();

maester.logging.addLogger(
    'default',
    new ConsoleLogger(
        new NodeConsoleFormatter(),
    ),
);

export {
    maester as default,
    Maester,
};
