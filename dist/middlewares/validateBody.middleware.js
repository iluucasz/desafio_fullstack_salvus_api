"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateBody = void 0;
class validateBody {
    static execute(schema) {
        return (request, response, next) => {
            request.body = schema.parse(request.body);
            return next();
        };
    }
}
exports.validateBody = validateBody;
