import { Router } from 'express';

import { ListPlantsHandler } from '../handlers/plants/ListPlantsHandler';
import { authenticateUser } from '../middlewares/authenticateUser';

const plantsRoutes = Router();

const listPlantsHandler = new ListPlantsHandler();

plantsRoutes.use(authenticateUser);

plantsRoutes.get('/', listPlantsHandler.handle);

export { plantsRoutes };
