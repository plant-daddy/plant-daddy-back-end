import { Router } from 'express';

import { authenticateUser } from '../middlewares/authenticateUser';

const usersPlantsRoutes = Router();
usersPlantsRoutes.use(authenticateUser);

// TODO ROUTES

usersPlantsRoutes.post('/', (req, res) => {
  res.send('ok');
});

export { usersPlantsRoutes };
