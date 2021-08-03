import { User } from '../entities/User';

interface ICreateUserDTO {
  username: string;
  password: string;
  email: string;
}

interface IUpdateUserDTO {
  id: number;
  username?: string;
  password?: string;
  email?: string;
}

interface IUserRepository {
  create(data: ICreateUserDTO): Promise<void>;
  update(user: User): Promise<void>;
  findByEmail(email: string): Promise<User>;
  findByUsername(username: string): Promise<User>;
  findById(id: number): Promise<User>;
}

export { ICreateUserDTO, IUpdateUserDTO, IUserRepository };
