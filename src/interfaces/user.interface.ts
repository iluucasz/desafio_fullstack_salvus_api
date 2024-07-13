import { userLoginSchemaCreate, userRegisterSchemaCreate, userReturn, userSchema } from '../schemas/users.schema';
import z from 'zod';

export type TUser = z.infer<typeof userSchema>;
export type TUserRegister = z.infer<typeof userRegisterSchemaCreate>;
export type TUserLogin = z.infer<typeof userLoginSchemaCreate>;
export type TUserReturn = z.infer<typeof userReturn>;

export type TUserLoginReturn = {
   AcessToken: string;
   user: TUserReturn;
};
