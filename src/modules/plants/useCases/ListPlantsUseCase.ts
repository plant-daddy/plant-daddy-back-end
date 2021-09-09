import { inject, injectable } from 'tsyringe';

import { Plant } from '../entities/Plant';
import { IPlantRepository } from '../repositories/IPlantRepository';

interface IRequest {
  common_name?: string;
}

@injectable()
class ListPlantsUseCase {
  constructor(
    @inject('PlantRepository')
    private plantRepository: IPlantRepository
  ) {}

  async execute({ common_name }: IRequest): Promise<Plant[]> {
    const plants = await this.plantRepository.search({ common_name });

    return plants;
  }
}

export { ListPlantsUseCase };
