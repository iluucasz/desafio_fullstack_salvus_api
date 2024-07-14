"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productUpdateSchema = exports.productCreateSchema = exports.productSchema = void 0;
const zod_1 = __importDefault(require("zod"));
exports.productSchema = zod_1.default.object({
    id: zod_1.default.number().positive(),
    name: zod_1.default.string().min(1, 'Campo obrigatório').max(50, 'No máximo 50 caracteres'),
    description: zod_1.default.string().min(1, 'Campo obrigatório').max(250, 'No máximo 250 caracteres'),
    price: zod_1.default.string().min(1, 'Campo obrigatório').max(10, 'No máximo 10 caracteres'),
    createdAt: zod_1.default.date(),
    updatedAt: zod_1.default.date(),
    userId: zod_1.default.number().positive()
});
exports.productCreateSchema = exports.productSchema.pick({ name: true, description: true, price: true });
exports.productUpdateSchema = exports.productSchema.pick({ name: true, description: true, price: true }).partial();
