import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  users: Array<User>;

  constructor() {
    this.users = [];
  }
  create(createUserDto: CreateUserDto) {
    const newUser = {
      ...createUserDto,
      id: this.users.length + 1,
    };
    this.users.push(newUser);
    return newUser;
  }

  findAll(): Array<User> {
    return this.users;
  }

  findOne(id: number): User {
    const user = this.users.find((u) => u.id === id);
    if (!user) throw new HttpException('User not Found', HttpStatus.NOT_FOUND);
    return user;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    const user = this.findOne(id);
    const index = this.users.indexOf(user);
    this.users[index] = { ...user, ...updateUserDto };
    return this.users[index];
  }

  remove(id: number) {
    this.users = this.users.filter((u) => u.id !== id);

    return this.users;
  }
}
