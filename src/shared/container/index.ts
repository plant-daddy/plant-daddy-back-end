import { container } from 'tsyringe';

import { PlantRepository } from '../../modules/plants/repositories/implementations/PlantRepository';
import { IPlantRepository } from '../../modules/plants/repositories/IPlantRepository';
import { UserRepository } from '../../modules/users/repositories/implementations/UserRepository';
import { IUserRepository } from '../../modules/users/repositories/IUserRepository';

container.registerSingleton<IUserRepository>('UserRepository', UserRepository);
container.registerSingleton<IPlantRepository>(
  'PlantRepository',
  PlantRepository
);
