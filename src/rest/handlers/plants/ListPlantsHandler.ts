import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListPlantsUseCase } from '../../../modules/plants/useCases/ListPlantsUseCase';

class ListPlantsHandler {
  async handle(request: Request, response: Response): Promise<Response> {
    const common_name = request.query.common_name as string | undefined;

    const listPlantsUseCase = container.resolve(ListPlantsUseCase);

    const plants = await listPlantsUseCase.execute({ common_name });

    return response.status(200).json(plants);
  }
}

export { ListPlantsHandler };
