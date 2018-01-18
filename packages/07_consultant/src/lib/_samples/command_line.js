const consultant = require('../lib/');

const rules = {
    label: 'jsmake',
    strict: true,
    children: {
        plugins: {
            type: consultant.types.command,
            aliases: [ 'p' ],
            id: 'plugins',
            label: 'Plugin commands',
            description: 'Add/list plugins',
            uiHidden: false,
            helpDetails: true, // show subcommands also,
            strict: true,

            children: {
                add: {
                    type: consultant.types.command,
                    id: 'plugins-add',
                    label: 'Add',
                    description: 'Adds a plugin',
                    'default': false,
                    uiHidden: true,
                    strict: false
                },
                repo: {
                    type: consultant.types.stringParameter,
                    label: 'Repo',
                    description: 'Specifies repo address',
                    'default': 'http://github.com/eserozvataf/',
                    uiHidden: true,
                    min: 0,
                    max: 1
                }
            } // async getChildren()
        },
        makefile: {
            type: consultant.types.stringParameter,
            aliases: [ 'f' ],
            label: 'Makefile',
            description: 'Load tasks from FILE',
            parameter: 'FILE',
            'default': [ 'makefile.js' ],
            uiHidden: false,
            min: 0,
            max: undefined,
            validate: (value) => value.length >= 3 || 'minimum 3 chars required'
        },
        tasks: {
            type: consultant.types.booleanParameter,
            // id: 'tasks',
            aliases: [ 't' ],
            label: 'Tasks',
            description: 'Lists defined tasks',
            'default': false,
            uiHidden: true
        },
        verbosity: {
            type: consultant.types.stringParameter,
            label: 'Verbosity',
            description: 'Sets verbosity of log messages [debug, warn, info, error]',
            'default': 'info',
            values: [ 'debug', 'warn', 'info', 'error' ],
            uiHidden: true,
            min: 0,
            max: 1
        },
        version: {
            type: consultant.types.booleanParameter,
            // id: 'version',
            aliases: [ 'v' ],
            label: 'Version',
            description: 'Displays the jsmake version',
            'default': false,
            uiHidden: true
        },
        help: {
            type: consultant.types.booleanParameter,
            // id: 'help',
            aliases: [ 'h', '?' ],
            label: 'Help',
            description: 'Displays this help message',
            'default': false,
            uiHidden: true
        }
    }
};

// command line parsing
(async function () {
    const params = new consultant(rules);
    const input = await params.fromCommandLine();

    if (input.values.verbosity === 'debug') {
        console.log(JSON.stringify(input, null, 4));
    }

    if (input.values.help) {
        if (input.commandId !== undefined) {
            await params.helpForId(input.commandId);
        }
        else {
            await params.help(rules);
        }
    }
})();
