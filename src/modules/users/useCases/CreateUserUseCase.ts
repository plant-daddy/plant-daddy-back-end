import { hash } from 'bcrypt';
import { inject, injectable } from 'tsyringe';

import { AppError } from '../../../errors/AppError';
import {
  ICreateUserDTO,
  IUserRepository,
} from '../repositories/IUserRepository';

@injectable()
class CreateUserUseCase {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository
  ) {}

  async execute({ username, email, password }: ICreateUserDTO): Promise<void> {
    const userWithEmailAlreadyExists = await this.userRepository.findByEmail(
      email
    );

    if (userWithEmailAlreadyExists) {
      throw new AppError('Email already exists');
    }
    const userWithUsernameAlreadyExists =
      await this.userRepository.findByUsername(username);

    if (userWithUsernameAlreadyExists) {
      throw new AppError('Username already exists');
    }

    const passwordHash = await hash(password, 8);

    await this.userRepository.create({
      username,
      password: passwordHash,
      email,
    });
  }
}

export { CreateUserUseCase };
