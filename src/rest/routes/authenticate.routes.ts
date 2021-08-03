import { Router } from 'express';

import { AuthenticateUserHandler } from '../handlers/users/AuthenticateUserHandler';

const authenticateRoutes = Router();

const authenticateUserHandler = new AuthenticateUserHandler();

authenticateRoutes.post('/sessions', authenticateUserHandler.handle);

export { authenticateRoutes };
