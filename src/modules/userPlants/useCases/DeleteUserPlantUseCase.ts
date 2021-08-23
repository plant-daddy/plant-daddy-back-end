import { inject, injectable } from 'tsyringe';

import { AppError } from '../../../errors/AppError';
import { IUserPlantRepository } from '../repositories/IUserPlantRepository';

interface IRequest {
  user_id: number;
  user_plant_id: number;
}

@injectable()
class DeleteUserPlantUseCase {
  constructor(
    @inject('UserPlantRepository')
    private userPlantRepository: IUserPlantRepository
  ) {}

  async execute({ user_plant_id, user_id }: IRequest): Promise<void> {
    const userPlant = await this.userPlantRepository.findById(user_plant_id);

    if (!userPlant || userPlant.user_id !== user_id) {
      throw new AppError('User plant not found.');
    }

    await this.userPlantRepository.deleteById(user_plant_id);
  }
}

export { DeleteUserPlantUseCase };
