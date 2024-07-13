import { NextFunction, Request, Response } from 'express';
import { prisma } from '../database/db';
import { AppError } from '../errors/AppError.error';

export class AuthOwner {
   static execute = async (request: Request, response: Response, next: NextFunction) => {
      const userId = response.locals.decode.id;
      const productId = Number(request.params.id);

      const product = await prisma.product.findUnique({
         where: { id: productId }
      });

      if (product?.userId !== userId) {
         throw new AppError(401, 'You are not allowed');
      }
      next();
   };
}
