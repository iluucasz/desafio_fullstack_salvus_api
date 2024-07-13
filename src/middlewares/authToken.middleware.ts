import { NextFunction, Request, Response } from 'express';
import { AppError } from '../errors/AppError.error';
import jwt from 'jsonwebtoken';

export class AuthToken {
   static execute (request: Request, response: Response, next: NextFunction) {
      const authorization = request.headers.authorization;

      const token = authorization?.replace('Bearer ', '');

      if (!token) {
         throw new AppError(403, 'token required');
      }

      jwt.verify(token, process.env.SECRET_KEY! as string);

      response.locals.decode = jwt.decode(token);

      next();
   }
}
