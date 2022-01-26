import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  private users: User[] = [{ id: 0, name: 'Marius' }];

  findAll(): User[] {
    return this.users;
  }

  findById(userId: number): User {
    return this.users.find((user) => {
      return user.id === userId;
    });
  }

  createUser(createUserDTO: CreateUserDTO): User {
    const newUser = { id: Date.now(), ...createUserDTO };
    this.users.push(newUser);
    return newUser;
  }
}
