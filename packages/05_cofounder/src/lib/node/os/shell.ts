import * as childProcess from 'child_process';
import appendToObject from 'immunity/lib/appendToObject';

const emptyArray = [];

function shell(command: string, args: Array<any> = emptyArray, env?: { [key: string]: string }): any {
    const env_ = (env === undefined) ?
        process.env :
        appendToObject(process.env, env);

    const proc = childProcess.spawnSync(
        command,
        args,
        {
            stdio: 'inherit',
            shell: true,
            env: env_,
            encoding: 'utf8',
        },
    );

    process.on('SIGTERM', () => (<any>proc).kill('SIGTERM'));

    return proc;
}

export {
    shell as default,
};
