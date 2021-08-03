import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { DeleteUserUseCase } from '../../../modules/users/useCases/DeleteUserUseCase';

class DeleteUserHandler {
  async handle(request: Request, response: Response): Promise<Response> {
    const user_id = Number(request.user.id);

    const deleteUserUseCase = container.resolve(DeleteUserUseCase);

    await deleteUserUseCase.execute({ user_id });

    return response.status(204).send();
  }
}

export { DeleteUserHandler };
