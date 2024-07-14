"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthOwner = void 0;
const db_1 = require("../database/db");
const AppError_error_1 = require("../errors/AppError.error");
class AuthOwner {
}
exports.AuthOwner = AuthOwner;
_a = AuthOwner;
AuthOwner.execute = (request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = response.locals.decode.id;
    const productId = Number(request.params.id);
    const product = yield db_1.prisma.product.findUnique({
        where: { id: productId }
    });
    if ((product === null || product === void 0 ? void 0 : product.userId) !== userId) {
        throw new AppError_error_1.AppError(401, 'You are not allowed');
    }
    next();
});
