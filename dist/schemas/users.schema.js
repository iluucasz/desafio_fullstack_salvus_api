"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userReturnAll = exports.userReturn = exports.userLoginSchemaCreate = exports.userRegisterSchemaCreate = exports.userSchema = void 0;
const zod_1 = __importDefault(require("zod"));
exports.userSchema = zod_1.default.object({
    id: zod_1.default.number().positive(),
    name: zod_1.default.string().min(1),
    email: zod_1.default.string().email().min(1),
    password: zod_1.default.string().min(6)
});
exports.userRegisterSchemaCreate = exports.userSchema.omit({ id: true });
exports.userLoginSchemaCreate = exports.userSchema.omit({ id: true, name: true });
exports.userReturn = exports.userSchema.omit({ password: true });
exports.userReturnAll = exports.userSchema.omit({ password: true }).array();
