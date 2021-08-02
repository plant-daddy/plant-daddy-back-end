import 'reflect-metadata';
import express, { Request, Response, NextFunction } from 'express';
import { ValidationError } from 'express-validation';
import 'express-async-errors';

import '../shared/container';

import { AppError } from '../errors/AppError';
import { router } from './routes';

import '../database';

const app = express();

app.use(express.json());

app.use(router);

app.use((err: Error, _: Request, response: Response, __: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      message: err.message,
    });
  }

  if (err instanceof ValidationError) {
    return response.status(err.statusCode).json(err);
  }

  return response.status(500).json({
    status: 'error',
    message: `Internal server error - ${err.message}`,
  });
});

app.listen(3333, () => console.log('Server is running'));
