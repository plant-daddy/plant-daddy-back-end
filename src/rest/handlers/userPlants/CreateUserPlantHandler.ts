import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateUserPlantUseCase } from '../../../modules/userPlants/useCases/CreateUserPlantUseCase';

class CreateUserPlantHandler {
  async handle(request: Request, response: Response): Promise<Response> {
    const user_id = Number(request.user.id);
    const { plant_id, nickname, description } = request.body;

    const createUserPlantUseCase = container.resolve(CreateUserPlantUseCase);

    await createUserPlantUseCase.execute({
      user_id,
      plant_id,
      nickname,
      description,
    });

    return response.status(201).send();
  }
}

export { CreateUserPlantHandler };
