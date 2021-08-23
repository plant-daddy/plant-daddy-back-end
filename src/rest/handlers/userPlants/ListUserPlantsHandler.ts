import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListUserPlantsUseCase } from '../../../modules/userPlants/useCases/ListUserPlantsUseCase';

class ListUserPlantsHandler {
  async handle(request: Request, response: Response): Promise<Response> {
    const user_id = Number(request.user.id);

    const listUserPlantsUseCase = container.resolve(ListUserPlantsUseCase);

    const userPlants = await listUserPlantsUseCase.execute({ user_id });

    return response.status(200).json(userPlants);
  }
}

export { ListUserPlantsHandler };
