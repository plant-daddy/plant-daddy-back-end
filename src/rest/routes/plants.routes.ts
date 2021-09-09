import { Router } from 'express';
import { Joi, validate } from 'express-validation';

import { ListPlantsHandler } from '../handlers/plants/ListPlantsHandler';
import { authenticateUser } from '../middlewares/authenticateUser';

const plantsRoutes = Router();

const listPlantsHandler = new ListPlantsHandler();
const listPlantsValidation = {
  query: Joi.object({
    common_name: Joi.string(),
  }),
};

plantsRoutes.use(authenticateUser);

plantsRoutes.get('/', validate(listPlantsValidation), listPlantsHandler.handle);

export { plantsRoutes };
