import { Router } from 'express';

const usersPlantsRoutes = Router();

// TODO ROUTES

usersPlantsRoutes.post('/', (req, res) => {
  res.send('ok');
});

export { usersPlantsRoutes };
