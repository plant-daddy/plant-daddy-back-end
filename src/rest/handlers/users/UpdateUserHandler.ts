import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateUserUseCase } from '../../../modules/users/useCases/UpdateUserUseCase';

class UpdateUserHandler {
  async handle(request: Request, response: Response): Promise<Response> {
    const { username, email, oldPassword, password } = request.body;
    const user_id = Number(request.user.id);

    const updateUserUseCase = container.resolve(UpdateUserUseCase);

    const user = await updateUserUseCase.execute({
      username,
      email,
      password,
      user_id,
      oldPassword,
    });

    return response.status(200).json(user);
  }
}

export { UpdateUserHandler };
