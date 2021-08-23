import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateUserPlantUseCase } from '../../../modules/userPlants/useCases/UpdateUserPlantUseCase';

class UpdateUserPlantHandler {
  async handle(request: Request, response: Response): Promise<Response> {
    const user_id = Number(request.user.id);
    const user_plant_id = Number(request.params.user_plant_id);
    const { plant_id, nickname, description } = request.body;

    const updateUserPlantUseCase = container.resolve(UpdateUserPlantUseCase);

    const userPlant = await updateUserPlantUseCase.execute({
      user_id,
      user_plant_id,
      plant_id,
      nickname,
      description,
    });

    return response.status(200).json(userPlant);
  }
}

export { UpdateUserPlantHandler };
