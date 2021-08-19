import { getRepository, Repository } from 'typeorm';

import { Plant } from '../../entities/Plant';
import { IPlantRepository } from '../IPlantRepository';

class PlantRepository implements IPlantRepository {
  private repository: Repository<Plant>;

  constructor() {
    this.repository = getRepository(Plant);
  }

  async findAll(): Promise<Plant[]> {
    const plants = await this.repository.find();

    return plants;
  }
}

export { PlantRepository };
