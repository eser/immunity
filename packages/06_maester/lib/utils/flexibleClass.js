"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function flexibleClass(definition) {
    if (definition instanceof Function) {
        return definition;
    }
    return function (...args) {
        Object.assign(this, definition);
        if (this.hasOwnProperty('constructor')) {
            this.constructor.call(this, ...args);
        }
    };
}
exports.flexibleClass = flexibleClass;
exports.default = flexibleClass;
//# sourceMappingURL=flexibleClass.js.map