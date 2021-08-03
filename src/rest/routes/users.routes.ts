import { Router } from 'express';
import { Joi, validate } from 'express-validation';

import { CreateUserHandler } from '../handlers/users/CreateUserHandler';
import { DeleteUserHandler } from '../handlers/users/DeleteUserHandler';
import { ShowUserHandler } from '../handlers/users/ShowUserHandler';
import { UpdateUserHandler } from '../handlers/users/UpdateUserHandler';
import { authenticateUser } from '../middlewares/authenticateUser';

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

const updateUserHandler = new UpdateUserHandler();
const updateUserValidation = {
  body: Joi.object({
    username: Joi.string(),
    email: Joi.string().email(),
    oldPassword: Joi.string(),
    password: Joi.string(),
    confirmPassword: Joi.valid(Joi.ref('password')),
  }),
};

const showUserHandler = new ShowUserHandler();

const deleteUserHandler = new DeleteUserHandler();
const deleteUserValidation = {
  body: Joi.object({
    confirm: Joi.boolean().valid(true).required(),
  }),
};

usersRoutes.post('/', validate(createUserValidation), createUserHandler.handle);

usersRoutes.use(authenticateUser);
usersRoutes.put('/', validate(updateUserValidation), updateUserHandler.handle);
usersRoutes.get('/', showUserHandler.handle);
usersRoutes.delete(
  '/',
  validate(deleteUserValidation),
  deleteUserHandler.handle
);

export { usersRoutes };
