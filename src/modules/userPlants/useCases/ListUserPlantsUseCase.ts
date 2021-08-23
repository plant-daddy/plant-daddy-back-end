import { inject, injectable } from 'tsyringe';

import { UserPlant } from '../entities/UserPlant';
import { IUserPlantRepository } from '../repositories/IUserPlantRepository';

interface IRequest {
  user_id: number;
}

@injectable()
class ListUserPlantsUseCase {
  constructor(
    @inject('UserPlantRepository')
    private userPlantRepository: IUserPlantRepository
  ) {}

  async execute({ user_id }: IRequest): Promise<UserPlant[]> {
    const userPlants = await this.userPlantRepository.findByUserId(user_id);

    return userPlants;
  }
}

export { ListUserPlantsUseCase };
