import { Router } from 'express';

import { authenticateRoutes } from './authenticate.routes';
import { usersPlantsRoutes } from './users-plants.routes';
import { usersRoutes } from './users.routes';

const router = Router();

router.use('/users', usersRoutes);
router.use('/users/:user_id/plants', usersPlantsRoutes);
router.use(authenticateRoutes);

export { router };
