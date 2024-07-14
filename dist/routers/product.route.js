"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRouter = void 0;
const express_1 = require("express");
const tsyringe_1 = require("tsyringe");
const product_controller_1 = require("../controllers/product.controller");
const AuthOwner_middleware_1 = require("../middlewares/AuthOwner.middleware");
const authToken_middleware_1 = require("../middlewares/authToken.middleware");
const validateBody_middleware_1 = require("../middlewares/validateBody.middleware");
const validateId_middleware_1 = require("../middlewares/validateId.middleware");
const product_schema_1 = require("../schemas/product.schema");
const product_service_1 = require("../services/product.service");
tsyringe_1.container.registerSingleton('ProductService', product_service_1.ProductServices);
const productController = tsyringe_1.container.resolve(product_controller_1.ProductController);
exports.productRouter = (0, express_1.Router)();
exports.productRouter.get('/user', authToken_middleware_1.AuthToken.execute, (req, res) => {
    productController.findMany(req, res);
});
exports.productRouter.get('/', (req, res) => {
    productController.findMany(req, res);
});
exports.productRouter.get('/:id', validateId_middleware_1.ValidateId.product, authToken_middleware_1.AuthToken.execute, AuthOwner_middleware_1.AuthOwner.execute, (req, res) => {
    productController.findOne(req, res);
});
exports.productRouter.post('/', validateBody_middleware_1.validateBody.execute(product_schema_1.productCreateSchema), authToken_middleware_1.AuthToken.execute, (req, res) => {
    productController.create(req, res);
});
exports.productRouter.patch('/:id', validateId_middleware_1.ValidateId.product, validateBody_middleware_1.validateBody.execute(product_schema_1.productUpdateSchema), authToken_middleware_1.AuthToken.execute, AuthOwner_middleware_1.AuthOwner.execute, (req, res) => {
    productController.update(req, res);
});
exports.productRouter.delete('/:id', validateId_middleware_1.ValidateId.product, authToken_middleware_1.AuthToken.execute, AuthOwner_middleware_1.AuthOwner.execute, (req, res) => {
    productController.delete(req, res);
});
