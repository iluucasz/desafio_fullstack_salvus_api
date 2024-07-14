"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthToken = void 0;
const AppError_error_1 = require("../errors/AppError.error");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class AuthToken {
    static execute(request, response, next) {
        const authorization = request.headers.authorization;
        const token = authorization === null || authorization === void 0 ? void 0 : authorization.replace('Bearer ', '');
        if (!token) {
            throw new AppError_error_1.AppError(403, 'token required');
        }
        jsonwebtoken_1.default.verify(token, process.env.SECRET_KEY);
        response.locals.decode = jsonwebtoken_1.default.decode(token);
        next();
    }
}
exports.AuthToken = AuthToken;
