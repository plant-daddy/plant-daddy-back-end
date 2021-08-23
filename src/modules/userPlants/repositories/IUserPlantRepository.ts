import { UserPlant } from '../entities/UserPlant';

interface ICreateUserPlantDTO {
  user_id: number;
  plant_id: number;
  nickname: string;
  description?: string;
}

interface IUserPlantRepository {
  create(data: ICreateUserPlantDTO): Promise<void>;
  update(userPlant: UserPlant): Promise<void>;
  findById(id: number): Promise<UserPlant | undefined>;
  findByUserId(user_id: number): Promise<UserPlant[]>;
  findByUserIdAndNickname(
    user_id: number,
    nickname: string
  ): Promise<UserPlant | undefined>;
  deleteById(id: number): Promise<void>;
}

export { IUserPlantRepository, ICreateUserPlantDTO };
