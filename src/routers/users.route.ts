import { Router } from 'express';
import { container } from 'tsyringe';
import { UsersService } from '../services/users.service';
import { UserController } from '../controllers/user.controller';
import { validateBody } from '../middlewares/validateBody.middleware';
import { userLoginSchemaCreate, userRegisterSchemaCreate } from '../schemas/users.schema';
import { AuthToken } from '../middlewares/authToken.middleware';
import { AlreadyRegistered } from '../middlewares/alreadyRegistered.middleware';

container.registerSingleton('UserService', UsersService);
const userController = container.resolve(UserController);

export const userRouter = Router();

userRouter.post('/register', validateBody.execute(userRegisterSchemaCreate), AlreadyRegistered.execute, (req, res) => {
   userController.register(req, res);
});

userRouter.post('/login', validateBody.execute(userLoginSchemaCreate), (req, res) => userController.login(req, res));

userRouter.get('/', AuthToken.execute, (req, res) => {
   userController.getUsers(req, res);
});
