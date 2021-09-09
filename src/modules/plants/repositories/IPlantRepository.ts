import { Plant } from '../entities/Plant';

interface IQueryDTO {
  common_name?: string;
}

interface IPlantRepository {
  findAll(): Promise<Plant[]>;
  search(query: IQueryDTO): Promise<Plant[]>;
}

export { IPlantRepository, IQueryDTO };
