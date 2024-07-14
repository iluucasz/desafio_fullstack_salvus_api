"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HandleErrors = void 0;
const AppError_error_1 = require("../errors/AppError.error");
const zod_1 = require("zod");
const jsonwebtoken_1 = require("jsonwebtoken");
class HandleErrors {
    static execute(error, request, response, next) {
        if (error instanceof AppError_error_1.AppError) {
            return response.status(error.statusCode).json({ message: error.message });
        }
        if (error instanceof zod_1.ZodError) {
            return response.status(422).json({ message: error });
        }
        if (error instanceof jsonwebtoken_1.JsonWebTokenError) {
            return response.status(400).json({ message: error.message });
        }
        console.log(error);
        return response.status(500).json({ message: 'internal server error' });
    }
}
exports.HandleErrors = HandleErrors;
