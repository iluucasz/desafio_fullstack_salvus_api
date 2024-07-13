import { Request, Response } from 'express';
import { inject, injectable } from 'tsyringe';
import { ProductServices } from '../services/product.service';

@injectable()
export class ProductController {
   constructor (@inject('ProductService') private productService: ProductServices) {}

   create = async (request: Request, response: Response) => {
      const id = response.locals.decode.id;
      const body = request.body;
      const create = await this.productService.create(body, id);

      return response.status(201).json({ message: create });
   };

   findOne = async (request: Request, response: Response) => {
      const params = Number(request.params.id);
      const search = await this.productService.findOne(params);
      return response.status(200).json({ message: search });
   };

   findMany = async (request: Request, response: Response) => {
      const id = response.locals.decode?.id;
      const search = await this.productService.findMany(id);
      return response.status(200).json({ message: search });
   };

   update = async (request: Request, response: Response) => {
      const params = Number(request.params.id);
      const body = request.body;
      const update = await this.productService.update(params, body);
      return response.status(201).json({ message: update });
   };

   delete = async (request: Request, response: Response) => {
      const params = Number(request.params.id);
      const del = await this.productService.delete(params);
      return response.status(204).json({ message: del });
   };
}
