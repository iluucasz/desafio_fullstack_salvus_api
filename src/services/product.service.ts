import { prisma } from '../database/db';
import { TProduct, TProductUpdate, TProductCreate } from '../schemas/product.schema';

export class ProductServices {
   create = async (body: TProductCreate, userId: number): Promise<TProduct> => {
      const product = await prisma.product.create({
         data: { ...body, userId }
      });
      return product;
   };

   findOne = async (id: number): Promise<TProduct> => {
      const product = await prisma.product.findFirst({
         where: {
            id
         }
      });

      return product as TProduct;
   };

   findMany = async (userId?: number): Promise<TProduct[] | null> => {
      const products = await prisma.product.findMany({
         where: {
            userId
         }
      });
      return products;
   };

   update = async (id: number, body: TProductUpdate): Promise<TProduct> => {
      const product = await prisma.product.update({
         where: {
            id
         },
         data: body
      });
      return product;
   };

   delete = async (id: number): Promise<TProduct> => {
      const product = await prisma.product.delete({
         where: {
            id
         }
      });
      return product;
   };
}
