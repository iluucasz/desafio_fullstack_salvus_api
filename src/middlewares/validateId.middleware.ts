import { NextFunction, Request, Response } from 'express';
import { prisma } from '../database/db';
import { AppError } from '../errors/AppError.error';

export class ValidateId {
   static product = async (request: Request, response: Response, next: NextFunction) => {
      const id = Number(request.params.id);

      const product = await prisma.product.findUnique({ where: { id } });

      if (!product || !id) {
         throw new AppError(404, 'Product not found');
      }

      next();
   };
}
