"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const getOrResolveRange_1 = require("./getOrResolveRange");
function ensure(collection, dependencies, callback, resolver) {
    return __awaiter(this, void 0, void 0, function* () {
        const serviceResolutions = getOrResolveRange_1.default(collection, resolver, ...dependencies);
        const services = yield Promise.all(serviceResolutions.result);
        const result = yield callback(...services);
        return {
            isChanged: serviceResolutions.isChanged,
            result: result,
            newCollection: serviceResolutions.newCollection,
        };
    });
}
exports.default = ensure;
//# sourceMappingURL=ensure.js.map