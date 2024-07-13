import z from 'zod';

export const userSchema = z.object({
   id: z.number().positive(),
   name: z.string().min(1),
   email: z.string().email().min(1),
   password: z.string().min(6)
});

export const userRegisterSchemaCreate = userSchema.omit({ id: true });
export const userLoginSchemaCreate = userSchema.omit({ id: true, name: true });
export const userReturn = userSchema.omit({ password: true });
export const userReturnAll = userSchema.omit({ password: true }).array();
