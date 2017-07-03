// TODO credit and license to juliangruber/stream

import { appendToObject } from 'immunity/lib/appendToObject';
import { EventEmitter } from 'es6-eventemitter/lib/EventEmitter';

export class Stream extends EventEmitter {
    readable: boolean;

    pipe(destination, options?): any {
        const defaultOptions = {};

        const options_: { [key: string]: any } = (options === undefined) ?
                defaultOptions :
                appendToObject(options, defaultOptions);

        // eslint-disable-next-line
        const source = this,
            isDisposable = (!destination.isStdio && options_.end !== false);

        const onData = (chunk) => {
            if (destination.writable) {
                const writeResult = destination.write(chunk);

                if (writeResult === false && source.pause !== undefined) {
                    source.pause();
                }
            }
        };

        const onDrain = () => {
            if (source.readable && source.resume !== undefined) {
                source.resume();
            }
        };

        let didOnEnd = false;

        const onSourceEnd = () => {
            if (didOnEnd) {
                return;
            }

            didOnEnd = true;

            destination.end();
        };

        const onSourceClose = () => {
            if (didOnEnd) {
                return;
            }

            didOnEnd = true;

            if (destination.destroy !== undefined) {
                destination.destroy();
            }
        };

        let detach;

        const onError = (err) => {
            detach();

            if (this.listenerCount('error') === 0) {
                throw err;
            }
        };

        const attach = () => {
            source.on('data', onData);
            if (isDisposable) {
                source.on('end', onSourceEnd);
                source.on('close', onSourceClose);
            }
            source.on('end', detach);
            source.on('close', detach);
            source.on('error', onError);

            destination.on('drain', onDrain);
            destination.on('end', detach);
            destination.on('close', detach);
            destination.on('error', onError);
        };

        detach = () => {
            source.off('data', onData);
            if (isDisposable) {
                source.off('end', onSourceEnd);
                source.off('close', onSourceClose);
            }
            source.off('end', detach);
            source.off('close', detach);
            source.off('error', onError);

            destination.off('drain', onDrain);
            destination.off('end', detach);
            destination.off('close', detach);
            destination.off('error', onError);
        };

        attach();

        this.emit('pipe', source);

        return destination;
    }
};

export default Stream;
