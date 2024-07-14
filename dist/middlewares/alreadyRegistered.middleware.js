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
exports.AlreadyRegistered = void 0;
const db_1 = require("../database/db");
const AppError_error_1 = require("../errors/AppError.error");
class AlreadyRegistered {
}
exports.AlreadyRegistered = AlreadyRegistered;
_a = AlreadyRegistered;
AlreadyRegistered.execute = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield db_1.prisma.users.findFirst({ where: { email: req.body.email } });
    if (user) {
        throw new AppError_error_1.AppError(403, 'E-mail already registered');
    }
    next();
});
