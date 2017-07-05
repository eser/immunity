import colors = require('colors/safe');
import util = require('util');

export class NodeConsoleFormatter {
    format(severity: any, message: string, extraData?: any): string {
        const formatted = `${colors[severity.color](severity.label)} ${message}`;

        if (extraData !== undefined) {
            return `${formatted} ${util.inspect(extraData, { depth: null, colors: true })}`;
        }

        return formatted;
    }
};

export default NodeConsoleFormatter;
