import yargsParser = require('yargs-parser');

const yargsConfiguration = {
    configuration: {
        'short-option-groups': false,
        'camel-case-expansion': true,
        'dot-notation': false,
        'parse-numbers': false,
        'boolean-negation': true, // --bool for true, --no-bool for false
    },
};

class ArgsParser {
    static parse(args): any {
        return yargsParser(args, yargsConfiguration);
    }
}

export {
    ArgsParser as default,
};
