import { Router } from 'express';
import { container } from 'tsyringe';
import { ProductController } from '../controllers/product.controller';
import { AuthOwner } from '../middlewares/AuthOwner.middleware';
import { AuthToken } from '../middlewares/authToken.middleware';
import { validateBody } from '../middlewares/validateBody.middleware';
import { ValidateId } from '../middlewares/validateId.middleware';
import { productCreateSchema, productUpdateSchema } from '../schemas/product.schema';
import { ProductServices } from '../services/product.service';

container.registerSingleton('ProductService', ProductServices);
const productController = container.resolve(ProductController);

export const productRouter = Router();

productRouter.get('/user', AuthToken.execute, (req, res) => {
   productController.findMany(req, res);
});
productRouter.get('/', (req, res) => {
   productController.findMany(req, res);
});
productRouter.get('/:id', ValidateId.product, AuthToken.execute, AuthOwner.execute, (req, res) => {
   productController.findOne(req, res);
});

productRouter.post('/', validateBody.execute(productCreateSchema), AuthToken.execute, (req, res) => {
   productController.create(req, res);
});
productRouter.patch(
   '/:id',
   ValidateId.product,
   validateBody.execute(productUpdateSchema),
   AuthToken.execute,
   AuthOwner.execute,
   (req, res) => {
      productController.update(req, res);
   }
);
productRouter.delete('/:id', ValidateId.product, AuthToken.execute, AuthOwner.execute, (req, res) => {
   productController.delete(req, res);
});
