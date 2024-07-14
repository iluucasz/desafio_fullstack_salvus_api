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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductServices = void 0;
const db_1 = require("../database/db");
class ProductServices {
    constructor() {
        this.create = (body, userId) => __awaiter(this, void 0, void 0, function* () {
            const product = yield db_1.prisma.product.create({
                data: Object.assign(Object.assign({}, body), { userId })
            });
            return product;
        });
        this.findOne = (id) => __awaiter(this, void 0, void 0, function* () {
            const product = yield db_1.prisma.product.findFirst({
                where: {
                    id
                }
            });
            return product;
        });
        this.findMany = (userId) => __awaiter(this, void 0, void 0, function* () {
            const products = yield db_1.prisma.product.findMany({
                where: {
                    userId
                }
            });
            return products;
        });
        this.update = (id, body) => __awaiter(this, void 0, void 0, function* () {
            const product = yield db_1.prisma.product.update({
                where: {
                    id
                },
                data: body
            });
            return product;
        });
        this.delete = (id) => __awaiter(this, void 0, void 0, function* () {
            const product = yield db_1.prisma.product.delete({
                where: {
                    id
                }
            });
            return product;
        });
    }
}
exports.ProductServices = ProductServices;
