import { Plant } from '../entities/Plant';

interface IPlantRepository {
  findAll(): Promise<Plant[]>;
}

export { IPlantRepository };
