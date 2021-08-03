import { Router } from 'express';
import { Joi, validate } from 'express-validation';

import { CreateUserHandler } from '../handlers/users/CreateUserHandler';

const usersRoutes = Router();

const createUserHandler = new CreateUserHandler();
const createUserValidation = {
  body: Joi.object({
    username: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    confirmPassword: Joi.valid(Joi.ref('password')).required(),
  }),
};

usersRoutes.post('/', validate(createUserValidation), createUserHandler.handle);

export { usersRoutes };
