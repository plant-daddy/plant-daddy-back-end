import { inject, injectable } from 'tsyringe';

import { AppError } from '../../../errors/AppError';
import { IUserPlantRepository } from '../repositories/IUserPlantRepository';

interface IRequest {
  plant_id: number;
  user_id: number;
  nickname: string;
  description?: string;
}

@injectable()
class CreateUserPlantUseCase {
  constructor(
    @inject('UserPlantRepository')
    private userPlantRepository: IUserPlantRepository
  ) {}

  async execute({
    plant_id,
    user_id,
    nickname,
    description,
  }: IRequest): Promise<void> {
    const userPlantWithNickname =
      await this.userPlantRepository.findByUserIdAndNickname(user_id, nickname);

    if (userPlantWithNickname) {
      throw new AppError('User already have a plant with this nickname.');
    }

    await this.userPlantRepository.create({
      plant_id,
      user_id,
      nickname,
      description,
    });
  }
}

export { CreateUserPlantUseCase };
