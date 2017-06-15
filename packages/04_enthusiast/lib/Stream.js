"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var immunity_1 = require("immunity");
var es6_eventemitter_1 = require("es6-eventemitter");
var Stream = (function (_super) {
    __extends(Stream, _super);
    function Stream() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Stream.prototype.pipe = function (destination, options) {
        var defaultOptions = {};
        var options_ = (options === undefined) ?
            defaultOptions :
            immunity_1.default.appendToObject(options, defaultOptions);
        var source = this, isDisposable = (!destination.isStdio && options_.end !== false);
        var onData = function (chunk) {
            if (destination.writable) {
                var writeResult = destination.write(chunk);
                if (writeResult === false && source.pause !== undefined) {
                    source.pause();
                }
            }
        };
        var onDrain = function () {
            if (source.readable && source.resume !== undefined) {
                source.resume();
            }
        };
        var didOnEnd = false;
        var onSourceEnd = function () {
            if (didOnEnd) {
                return;
            }
            didOnEnd = true;
            destination.end();
        };
        var onSourceClose = function () {
            if (didOnEnd) {
                return;
            }
            didOnEnd = true;
            if (destination.destroy !== undefined) {
                destination.destroy();
            }
        };
        var detach;
        var onError = function (err) {
            detach();
            if (this.listenerCount('error') === 0) {
                throw err;
            }
        };
        var attach = function () {
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
        detach = function () {
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
    };
    return Stream;
}(es6_eventemitter_1.default));
exports.Stream = Stream;
exports.default = Stream;
//# sourceMappingURL=Stream.js.map