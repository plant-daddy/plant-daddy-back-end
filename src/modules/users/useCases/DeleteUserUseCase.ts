import { inject, injectable } from 'tsyringe';

import { IUserRepository } from '../repositories/IUserRepository';

interface IRequest {
  user_id: number;
}

@injectable()
class DeleteUserUseCase {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository
  ) {}

  async execute({ user_id }: IRequest): Promise<void> {
    await this.userRepository.deleteById(user_id);
  }
}

export { DeleteUserUseCase };
