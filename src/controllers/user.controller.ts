import { inject, injectable } from 'tsyringe';
import { UsersService } from '../services/users.service';
import { Request, Response } from 'express';

@injectable()
export class UserController {
   constructor (@inject('UserService') private userService: UsersService) {}

   register = async (request: Request, response: Response): Promise<Response> => {
      const body = request.body;
      const register = await this.userService.register(body);
      return response.status(201).json(register);
   };

   login = async (request: Request, response: Response): Promise<Response> => {
      const body = request.body;
      const login = await this.userService.login(body);
      return response.status(200).json(login);
   };

   getUser = async (request: Request, response: Response): Promise<Response> => {
      const id = response.locals.decode.id;
      const getUser = await this.userService.getUser(id);
      return response.status(200).json(getUser);
   };

   getUsers = async (request: Request, response: Response): Promise<Response> => {
      const getUser = await this.userService.getAllUser();
      return response.status(200).json(getUser);
   };
}
