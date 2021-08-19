import { inject, injectable } from 'tsyringe';

import { Plant } from '../entities/Plant';
import { IPlantRepository } from '../repositories/IPlantRepository';

@injectable()
class ListPlantsUseCase {
  constructor(
    @inject('PlantRepository')
    private plantRepository: IPlantRepository
  ) {}

  async execute(): Promise<Plant[]> {
    const plants = await this.plantRepository.findAll();

    return plants;
  }
}

export { ListPlantsUseCase };
