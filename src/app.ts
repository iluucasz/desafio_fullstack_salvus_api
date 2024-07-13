import 'express-async-errors';
import 'reflect-metadata';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger.json';
import express, { json } from 'express';
import helmet from 'helmet';
import cors from 'cors';
import { HandleErrors } from './middlewares/handleErrors.middleware';
import { userRouter } from './routers/users.route';
import { productRouter } from './routers/product.route';

export const app = express();
app.use(helmet());
app.use(cors());
app.use(json());
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/product', productRouter);
app.use('/users', userRouter);
app.use(HandleErrors.execute);
