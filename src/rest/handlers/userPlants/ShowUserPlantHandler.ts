import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ShowUserPlantUseCase } from '../../../modules/userPlants/useCases/ShowUserPlantUseCase';

class ShowUserPlantHandler {
  async handle(request: Request, response: Response): Promise<Response> {
    const user_id = Number(request.user.id);
    const user_plant_id = Number(request.params.user_plant_id);

    const showUserPlantUseCase = container.resolve(ShowUserPlantUseCase);

    const userPlant = await showUserPlantUseCase.execute({
      user_id,
      user_plant_id,
    });

    return response.status(200).json(userPlant);
  }
}

export { ShowUserPlantHandler };
