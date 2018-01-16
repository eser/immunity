"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function emitter(events, eventName, args, subscribers) {
    const hasSubscribers = (subscribers !== undefined);
    const isEventWildcard = (eventName === '*');
    const argsPass = (args !== undefined) ? args : [];
    for (const eventKey in events) {
        if (!isEventWildcard && eventName !== eventKey) {
            continue;
        }
        for (const eventSubscriber of events[eventKey]) {
            if (hasSubscribers) {
                subscribers.forEach(subscriber => {
                    subscriber({ event: eventKey, subscriber: eventSubscriber.name, args: args });
                });
            }
            await eventSubscriber(...argsPass);
        }
    }
}
exports.default = emitter;
//# sourceMappingURL=emitter.js.map