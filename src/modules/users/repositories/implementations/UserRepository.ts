import { getRepository, Repository } from 'typeorm';

import { User } from '../../entities/User';
import { ICreateUserDTO, IUserRepository } from '../IUserRepository';

class UserRepository implements IUserRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async create({ username, email, password }: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({
      username,
      email,
      password,
    });

    await this.repository.save(user);
  }

  async update(user: User): Promise<void> {
    await this.repository.save(user);
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.repository.findOne({ email });

    return user;
  }

  async findByUsername(username: string): Promise<User> {
    const user = await this.repository.findOne({ username });

    return user;
  }

  async findById(id: number): Promise<User> {
    const user = await this.repository.findOne(id);

    return user;
  }
}

export { UserRepository };
