import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ShowUserUseCase } from '../../../modules/users/useCases/ShowUserUseCase';

class ShowUserHandler {
  async handle(request: Request, response: Response): Promise<Response> {
    const user_id = Number(request.user.id);

    const showUserUseCase = container.resolve(ShowUserUseCase);

    const user = await showUserUseCase.execute({
      user_id,
    });

    return response.status(200).json(user);
  }
}

export { ShowUserHandler };
