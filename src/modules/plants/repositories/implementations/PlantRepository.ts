import { getRepository, Like, Repository } from 'typeorm';

import { Plant } from '../../entities/Plant';
import { IPlantRepository, IQueryDTO } from '../IPlantRepository';

class PlantRepository implements IPlantRepository {
  private repository: Repository<Plant>;

  constructor() {
    this.repository = getRepository(Plant);
  }

  async findAll(): Promise<Plant[]> {
    const plants = await this.repository.find({ relations: ['type', 'soils'] });

    return plants;
  }

  async search({ common_name }: IQueryDTO): Promise<Plant[]> {
    if (common_name) {
      const plants = await this.repository.find({
        relations: ['type', 'soils'],
        where: { common_name: Like(`%${common_name}%`) },
      });

      return plants;
    }

    const plants = await this.repository.find({ relations: ['type', 'soils'] });

    return plants;
  }
}

export { PlantRepository };
