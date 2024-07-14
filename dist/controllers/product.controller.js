"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
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
exports.ProductController = void 0;
const tsyringe_1 = require("tsyringe");
const product_service_1 = require("../services/product.service");
let ProductController = class ProductController {
    constructor(productService) {
        this.productService = productService;
        this.create = (request, response) => __awaiter(this, void 0, void 0, function* () {
            const id = response.locals.decode.id;
            const body = request.body;
            const create = yield this.productService.create(body, id);
            return response.status(201).json({ message: create });
        });
        this.findOne = (request, response) => __awaiter(this, void 0, void 0, function* () {
            const params = Number(request.params.id);
            const search = yield this.productService.findOne(params);
            return response.status(200).json({ message: search });
        });
        this.findMany = (request, response) => __awaiter(this, void 0, void 0, function* () {
            var _a;
            const id = (_a = response.locals.decode) === null || _a === void 0 ? void 0 : _a.id;
            const search = yield this.productService.findMany(id);
            return response.status(200).json({ message: search });
        });
        this.update = (request, response) => __awaiter(this, void 0, void 0, function* () {
            const params = Number(request.params.id);
            const body = request.body;
            const update = yield this.productService.update(params, body);
            return response.status(201).json({ message: update });
        });
        this.delete = (request, response) => __awaiter(this, void 0, void 0, function* () {
            const params = Number(request.params.id);
            const del = yield this.productService.delete(params);
            return response.status(204).json({ message: del });
        });
    }
};
exports.ProductController = ProductController;
exports.ProductController = ProductController = __decorate([
    (0, tsyringe_1.injectable)(),
    __param(0, (0, tsyringe_1.inject)('ProductService')),
    __metadata("design:paramtypes", [product_service_1.ProductServices])
], ProductController);
