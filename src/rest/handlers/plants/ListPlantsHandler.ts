import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListPlantsUseCase } from '../../../modules/plants/useCases/ListPlantsUseCase';

class ListPlantsHandler {
  async handle(_: Request, response: Response): Promise<Response> {
    const listPlantsUseCase = container.resolve(ListPlantsUseCase);

    const plants = await listPlantsUseCase.execute();

    return response.status(200).json(plants);
  }
}

export { ListPlantsHandler };
