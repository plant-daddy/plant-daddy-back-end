import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

import { AppError } from '../../errors/AppError';
import { UserRepository } from '../../modules/users/repositories/implementations/UserRepository';

interface IPayload {
  sub: string;
}

export async function authenticateUser(
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError('Token missing.', 401);
  }

  const [, token] = authHeader.split(' ');

  try {
    const { sub: user_id } = verify(token, 'secret') as IPayload;

    const userRepository = new UserRepository();

    const user = await userRepository.findById(Number(user_id));

    if (!user) {
      throw new AppError('User does not exists.', 401);
    }

    request.user = {
      id: user_id,
    };

    next();
  } catch {
    throw new AppError('Invalid token', 401);
  }
}
