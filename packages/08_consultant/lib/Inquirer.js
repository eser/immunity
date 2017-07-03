"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Inquirer {
    async inquire(rules) {
        return Promise.resolve({
            tags: [],
            values: {},
            isValid: false,
            isCancelled: true,
            errors: {}
        });
    }
}
exports.Inquirer = Inquirer;
exports.default = Inquirer;
//# sourceMappingURL=Inquirer.js.map