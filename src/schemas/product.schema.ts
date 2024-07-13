import z from 'zod';

export const productSchema = z.object({
   id: z.number().positive(),
   name: z.string().min(1, 'Campo obrigatório').max(50, 'No máximo 50 caracteres'),
   description: z.string().min(1, 'Campo obrigatório').max(250, 'No máximo 250 caracteres'),
   price: z.string().min(1, 'Campo obrigatório').max(10, 'No máximo 10 caracteres'),
   createdAt: z.date(),
   updatedAt: z.date(),
   userId: z.number().positive()
});

export const productCreateSchema = productSchema.pick({ name: true, description: true, price: true });
export const productUpdateSchema = productSchema.pick({ name: true, description: true, price: true }).partial();

export type TProductCreate = z.infer<typeof productCreateSchema>;
export type TProductUpdate = z.infer<typeof productUpdateSchema>;

export type TProduct = z.infer<typeof productSchema>;
