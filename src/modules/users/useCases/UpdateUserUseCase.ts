import { hash, compare } from 'bcrypt';
import { inject, injectable } from 'tsyringe';

import { AppError } from '../../../errors/AppError';
import { User } from '../entities/User';
import { IUserRepository } from '../repositories/IUserRepository';

interface IRequest {
  user_id: number;
  oldPassword?: string;
  password?: string;
  username?: string;
  email?: string;
}

@injectable()
class UpdateUserUseCase {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository
  ) {}

  async execute({
    user_id,
    username,
    email,
    oldPassword,
    password,
  }: IRequest): Promise<User> {
    const user = await this.userRepository.findById(user_id);

    if (email) {
      const userWithEmail = await this.userRepository.findByEmail(email);

      if (userWithEmail && userWithEmail.id !== user_id) {
        throw new AppError('Email already exists');
      }

      user.email = email;
    }

    if (username) {
      const userWithUsernameAlreadyExists =
        await this.userRepository.findByUsername(username);

      if (userWithUsernameAlreadyExists) {
        throw new AppError('Username already exists');
      }

      user.username = username;
    }

    if (oldPassword) {
      if (!compare(oldPassword, user.password)) {
        throw new AppError('Invalid password');
      }

      const passwordHash = await hash(password, 8);
      user.password = passwordHash;
    }

    await this.userRepository.update(user);
    delete user.password;

    return user;
  }
}

export { UpdateUserUseCase };
