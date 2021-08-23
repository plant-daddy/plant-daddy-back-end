import { getRepository, Repository } from 'typeorm';

import { UserPlant } from '../../entities/UserPlant';
import {
  ICreateUserPlantDTO,
  IUserPlantRepository,
} from '../IUserPlantRepository';

class UserPlantRepository implements IUserPlantRepository {
  private repository: Repository<UserPlant>;

  constructor() {
    this.repository = getRepository(UserPlant);
  }

  async findByUserId(user_id: number): Promise<UserPlant[]> {
    const userPlants = await this.repository.find({
      relations: ['plant', 'user'],
      where: { user_id },
    });

    return userPlants;
  }

  async findById(id: number): Promise<UserPlant | undefined> {
    const userPlant = await this.repository.findOne(id, {
      relations: ['plant', 'user'],
    });

    return userPlant;
  }

  async findByUserIdAndNickname(
    user_id: number,
    nickname: string
  ): Promise<UserPlant | undefined> {
    const userPlant = await this.repository.findOne({
      where: { nickname, user_id },
    });

    return userPlant;
  }

  async create({
    nickname,
    plant_id,
    user_id,
    description,
  }: ICreateUserPlantDTO): Promise<void> {
    const userPlant = this.repository.create({
      nickname,
      plant_id,
      user_id,
      description,
    });

    await this.repository.save(userPlant);
  }

  async update(userPlant: UserPlant): Promise<void> {
    await this.repository.save(userPlant);
  }

  async deleteById(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}

export { UserPlantRepository };
