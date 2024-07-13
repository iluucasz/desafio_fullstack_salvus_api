import { injectable } from 'tsyringe';
import { TUserLogin, TUserLoginReturn, TUserRegister, TUserReturn } from '../interfaces/user.interface';
import { prisma } from '../database/db';
import bcrypt from 'bcrypt';
import { userReturn, userReturnAll } from '../schemas/users.schema';
import { AppError } from '../errors/AppError.error';
import jwt from 'jsonwebtoken';

@injectable()
export class UsersService {
   register = async (body: TUserRegister): Promise<TUserReturn> => {
      const hashPassword = await bcrypt.hash(body.password, 8);

      const user = {
         ...body,
         password: hashPassword
      };

      const createUser = await prisma.users.create({ data: user });
      return userReturn.parse(createUser);
   };

   login = async (body: TUserLogin): Promise<TUserLoginReturn> => {
      const user = await prisma.users.findUnique({ where: { email: body.email } });

      if (!user) {
         throw new AppError(404, 'User Not Registered');
      }

      const compare = await bcrypt.compare(body.password, user.password);
      if (!compare) {
         throw new AppError(401, 'Email/Password invalid');
      }

      const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY!);

      return { AcessToken: token, user: userReturn.parse(user) };
   };

   getUser = async (id: number): Promise<TUserReturn> => {
      const user = await prisma.users.findUnique({ where: { id } });
      return userReturn.parse(user);
   };

   getAllUser = async (): Promise<TUserReturn[]> => {
      const user = await prisma.users.findMany();

      return userReturnAll.parse(user);
   };
}
