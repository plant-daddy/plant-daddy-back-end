import { inject, injectable } from 'tsyringe';

import { AppError } from '../../../errors/AppError';
import { UserPlant } from '../entities/UserPlant';
import { IUserPlantRepository } from '../repositories/IUserPlantRepository';

interface IRequest {
  user_id: number;
  user_plant_id: number;
  plant_id: number;
  nickname: string;
  description?: string;
}

@injectable()
class UpdateUserPlantUseCase {
  constructor(
    @inject('UserPlantRepository')
    private userPlantRepository: IUserPlantRepository
  ) {}

  async execute({
    user_plant_id,
    user_id,
    plant_id,
    nickname,
    description,
  }: IRequest): Promise<UserPlant> {
    const userPlant = await this.userPlantRepository.findById(user_plant_id);

    if (!userPlant || userPlant.user_id !== user_id) {
      throw new AppError('User plant not found.');
    }

    if (nickname) {
      const userPlantWithNickname =
        await this.userPlantRepository.findByUserIdAndNickname(
          user_id,
          nickname
        );

      if (userPlantWithNickname && userPlantWithNickname.user_id !== user_id) {
        throw new AppError('User already have a plant with this nickname.');
      }

      userPlant.nickname = nickname;
    }

    if (plant_id) {
      userPlant.plant_id = plant_id;
    }

    if (description) {
      userPlant.description = description;
    }

    await this.userPlantRepository.update(userPlant);

    return userPlant;
  }
}

export { UpdateUserPlantUseCase };
