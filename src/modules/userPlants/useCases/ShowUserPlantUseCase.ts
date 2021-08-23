import { inject, injectable } from 'tsyringe';

import { AppError } from '../../../errors/AppError';
import { UserPlant } from '../entities/UserPlant';
import { IUserPlantRepository } from '../repositories/IUserPlantRepository';

interface IRequest {
  user_plant_id: number;
  user_id: number;
}

@injectable()
class ShowUserPlantUseCase {
  constructor(
    @inject('UserPlantRepository')
    private userPlantRepository: IUserPlantRepository
  ) {}

  async execute({ user_id, user_plant_id }: IRequest): Promise<UserPlant> {
    const userPlant = await this.userPlantRepository.findById(user_plant_id);

    if (!userPlant || userPlant.user_id !== user_id) {
      throw new AppError('User plant not found.');
    }

    return userPlant;
  }
}

export { ShowUserPlantUseCase };
