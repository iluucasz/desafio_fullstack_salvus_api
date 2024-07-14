"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const tsyringe_1 = require("tsyringe");
const users_service_1 = require("../services/users.service");
const user_controller_1 = require("../controllers/user.controller");
const validateBody_middleware_1 = require("../middlewares/validateBody.middleware");
const users_schema_1 = require("../schemas/users.schema");
const authToken_middleware_1 = require("../middlewares/authToken.middleware");
const alreadyRegistered_middleware_1 = require("../middlewares/alreadyRegistered.middleware");
tsyringe_1.container.registerSingleton('UserService', users_service_1.UsersService);
const userController = tsyringe_1.container.resolve(user_controller_1.UserController);
exports.userRouter = (0, express_1.Router)();
exports.userRouter.post('/register', validateBody_middleware_1.validateBody.execute(users_schema_1.userRegisterSchemaCreate), alreadyRegistered_middleware_1.AlreadyRegistered.execute, (req, res) => {
    userController.register(req, res);
});
exports.userRouter.post('/login', validateBody_middleware_1.validateBody.execute(users_schema_1.userLoginSchemaCreate), (req, res) => userController.login(req, res));
exports.userRouter.get('/', authToken_middleware_1.AuthToken.execute, (req, res) => {
    userController.getUsers(req, res);
});
exports.userRouter.get('/:id', authToken_middleware_1.AuthToken.execute, (req, res) => {
    userController.getUser(req, res);
});
