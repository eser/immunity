"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ponyfills_1 = require("ponyfills");
function flexibleClass(definition) {
    if (definition instanceof Function) {
        return definition;
    }
    return function (...args) {
        ponyfills_1.assign(this, definition);
        if (this.hasOwnProperty('constructor')) {
            this.constructor.call(this, ...args);
        }
    };
}
exports.flexibleClass = flexibleClass;
exports.default = flexibleClass;
//# sourceMappingURL=flexibleClass.js.map