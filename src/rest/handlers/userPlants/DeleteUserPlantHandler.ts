import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { DeleteUserPlantUseCase } from '../../../modules/userPlants/useCases/DeleteUserPlantUseCase';

class DeleteUserPlantHandler {
  async handle(request: Request, response: Response): Promise<Response> {
    const user_id = Number(request.user.id);
    const user_plant_id = Number(request.params.user_plant_id);

    const deleteUserPlantUseCase = container.resolve(DeleteUserPlantUseCase);

    await deleteUserPlantUseCase.execute({ user_plant_id, user_id });

    return response.status(204).send();
  }
}

export { DeleteUserPlantHandler };
