import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

import { User } from './entities/user.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    private config: ConfigService,
  ) {}
  private readonly logger = new Logger(UsersService.name);

  async create(createUserDto: CreateUserDto) {
    try {
      const user = await this.userModel.create(createUserDto);

      console.log(user);
      return user;
    } catch (error) {
      if (error.code === 11000) {
        this.logger.fatal(
          `tentativa de cadastrar novo user com email ${createUserDto.email} já existente`,
        );
        throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
      }
      throw new HttpException(
        'Invalid param',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findAll() {
    const allUsers = await this.userModel.find();
    return allUsers;
  }

  async findOne(id: string) {
    const user = await this.userModel.findOne({ _id: id });

    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.userModel.updateOne({ _id: id }, updateUserDto);
    console.log(user);
    if (user.modifiedCount === 0) {
      return { message: `User with _id ${id} not found` };
    }
    const newUser = await this.userModel.findOne({ _id: id });
    return newUser;
  }

  async remove(id: string) {
    const users = await this.userModel.deleteOne({ _id: id });
    return users;
  }

  async addDocuments(uid: string, files: Express.Multer.File[], type: string): Promise<User> {
    const user = await this.userModel.findById(uid);
    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    const documents = files.map((file) => ({
      name: file.originalname,
      reference: `/uploads/${type === 'profile' ? 'profiles/' : type === 'product' ? 'products/' : 'documents/'}${file.originalname}`,
    }));

    user.documents.push(...documents);
    user.documentStatus = 'uploaded';
    return user.save();
  }

  async login(uid: string): Promise<User> {
    const user = await this.userModel.findById(uid);
    if (!user) {
      throw new HttpException('Usuário não encontrado',  HttpStatus.NOT_FOUND);
    }

    user.last_connection = new Date();
    return user.save();
  }

  async logout(uid: string): Promise<User> {
    const user = await this.userModel.findById(uid);
    if (!user) {
      throw new HttpException('Usuário não encontrado',  HttpStatus.NOT_FOUND);
    }

    user.last_connection = new Date();
    return user.save();
  }
}
