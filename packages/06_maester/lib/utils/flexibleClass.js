"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function flexibleClass(definition) {
    if (definition instanceof Function) {
        return definition;
    }
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        Object.assign(this, definition);
        if (this.hasOwnProperty('constructor')) {
            (_a = this.constructor).call.apply(_a, [this].concat(args));
        }
        var _a;
    };
}
exports.flexibleClass = flexibleClass;
exports.default = flexibleClass;
//# sourceMappingURL=flexibleClass.js.map