'use strict';

let config = new sey.config({
    global: {
        clean: {
            before: ['./lib/*']
        }
    },

    main: {
        target: 'node',
        standard: 2016,

        eser: true,

        banner: [
            '/**',
            ' * immunity',
            ' *',
            ' * @version v0.0.1',
            ' * @link http://eser.ozvataf.com',
            ' */',
            ''
        ].join('\n'),

        ops: [
            {
                src: ['./src/**/*.js'],
                dest: './lib/',

                addheader: true,
                eolfix: true,
                lint: true,
                optimize: true,
                transpile: true
            },
            {
                src: './test/*.js',
                test: true
            }
        ]
    }
});

sey.run(config);
