import { Router } from 'express';
import { Joi, validate } from 'express-validation';

import { CreateUserPlantHandler } from '../handlers/userPlants/CreateUserPlantHandler';
import { DeleteUserPlantHandler } from '../handlers/userPlants/DeleteUserPlantHandler';
import { ListUserPlantsHandler } from '../handlers/userPlants/ListUserPlantsHandler';
import { ShowUserPlantHandler } from '../handlers/userPlants/ShowUserPlantHandler';
import { UpdateUserPlantHandler } from '../handlers/userPlants/UpdateUserPlantHandler';
import { authenticateUser } from '../middlewares/authenticateUser';

const usersPlantsRoutes = Router();

const listUserPlantsHandler = new ListUserPlantsHandler();

const showUserPlantHandler = new ShowUserPlantHandler();
const showUserPlantValidation = {
  params: Joi.object({
    user_plant_id: Joi.number().required(),
  }),
};

const createUserPlantHandler = new CreateUserPlantHandler();
const createUserPlantValidation = {
  body: Joi.object({
    plant_id: Joi.number().required(),
    nickname: Joi.string().max(20).required(),
    description: Joi.string(),
  }),
};

const updateUserPlantHandler = new UpdateUserPlantHandler();
const updateUserPlantValidation = {
  params: Joi.object({
    user_plant_id: Joi.number().required(),
  }),
  body: Joi.object({
    plant_id: Joi.number(),
    nickname: Joi.string().max(20),
    description: Joi.string(),
  }),
};

const deleteUserPlantHandler = new DeleteUserPlantHandler();
const deleteUserPlantValidation = {
  params: Joi.object({
    user_plant_id: Joi.number().required(),
  }),
};

usersPlantsRoutes.use(authenticateUser);

usersPlantsRoutes.get('/', listUserPlantsHandler.handle);
usersPlantsRoutes.get(
  '/:user_plant_id',
  validate(showUserPlantValidation),
  showUserPlantHandler.handle
);
usersPlantsRoutes.post(
  '/',
  validate(createUserPlantValidation),
  createUserPlantHandler.handle
);
usersPlantsRoutes.put(
  '/:user_plant_id',
  validate(updateUserPlantValidation),
  updateUserPlantHandler.handle
);
usersPlantsRoutes.delete(
  '/:user_plant_id',
  validate(deleteUserPlantValidation),
  deleteUserPlantHandler.handle
);

export { usersPlantsRoutes };
