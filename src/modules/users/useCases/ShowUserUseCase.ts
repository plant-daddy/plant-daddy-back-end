import { inject, injectable } from 'tsyringe';

import { User } from '../entities/User';
import { IUserRepository } from '../repositories/IUserRepository';

interface IRequest {
  user_id: number;
}

@injectable()
class ShowUserUseCase {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository
  ) {}

  async execute({ user_id }: IRequest): Promise<User> {
    const user = await this.userRepository.findById(user_id);
    delete user.password;

    return user;
  }
}

export { ShowUserUseCase };
